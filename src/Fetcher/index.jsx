import { useContext } from "react";

import useFetch from "../useFetch";
import { ContextState } from "../Context";

const Fetcher = () => {
  const { state } = useContext(ContextState);
  useFetch(state.count);
  return null;
};

export default Fetcher;
