import React, { useContext } from 'react';

import { ContextState } from '../Context';

const StepButtons = () => {
  const { dispatch } = useContext(ContextState);
  return (
    <>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
};

export default StepButtons;
