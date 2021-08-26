// https://jsonplaceholder.typicode.com/posts/1?_embed=comments

import { useContext, useEffect } from 'react';
import useSWR from 'swr';

import { ContextState } from './Context';

const get = (path) =>
  fetch(
    `https://jsonplaceholder.typicode.com/${path}?_embed=comments`
  ).then((res) => res.json());

export default function useFetch() {
  const { state, dispatch } = useContext(ContextState);
  const { data, error } = useSWR(`posts/${state.count}`, get);
  const isLoading = !error && !data;
  useEffect(() => {
    if (!isLoading) dispatch.text(data.title);
  }, [isLoading, state.count]);
  return { ...data, isLoading };
}
