import React, { useContext } from 'react';

import useFetch from '../useFetch';
import { ContextState } from '../Context';

const Fetcher = () => {
  const { state, dispatch } = useContext(ContextState);
  const data = useFetch(state.count);
  return null;
};

export default Fetcher;
