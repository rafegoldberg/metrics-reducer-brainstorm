// https://jsonplaceholder.typicode.com/posts/1?_embed=comments

import { useContext, useEffect } from "react";
import useSWR from "swr";

import { ContextState } from "./Context";

const get = (path) => {
  path = `https://jsonplaceholder.typicode.com/${path}`;
  return fetch(path).then((res) => res.json());
};

export default function useFetch() {
  const { state, dispatch } = useContext(ContextState);
  const { path, id, params } = state;
  const { data, error } = useSWR(`${path}/${id}?${params}`, get);
  const isLoading = !error && !data;
  // useEffect(() => {
  //   if (!isLoading) {
  //     dispatch.data({ ...data, isLoading });
  //     dispatch({ type: "text", payload: data?.title });
  //   }
  // }, [state.id, isLoading, data, dispatch]);
  return { ...data, isLoading };
}
