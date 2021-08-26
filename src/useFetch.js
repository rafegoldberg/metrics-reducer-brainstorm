import { useContext } from "react";
import useSWR from "swr";

import { ContextState } from "./Context";

const get = (path) => {
  path = `https://jsonplaceholder.typicode.com/${path}`;
  return fetch(path).then((res) => res.json());
};

export default function useFetch() {
  const { state } = useContext(ContextState);
  const { path, id, params } = state;
  const { data, error } = useSWR(`${path}/${id}?${params}`, get);
  const isLoading = !error && !data;
  return { ...data, isLoading };
}
