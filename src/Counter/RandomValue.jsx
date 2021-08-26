import React, { useContext } from 'react';

import { ContextState } from '../Context';

const random = (max = 10, min = 1) => Math.floor(Math.random() * max) + min;

const RandomValue = () => {
  const {
    state: { count },
    dispatch,
  } = useContext(ContextState);
  return <button onClick={() => dispatch.set(random(100))}>Random</button>;
};

export default RandomValue;
