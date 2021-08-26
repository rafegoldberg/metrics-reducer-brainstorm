import React, { useMemo, useReducer } from 'react';

export const ContextState = React.createContext();

const initialState = { count: 1, text: 'Hi World' };

function stateReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'text':
      return { ...state, text: payload };
    case 'set':
      return { ...state, count: payload };
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      console.error(`No action "${type}" found.`);
      return state;
  }
}

export default function ContextWrap({ children }) {
  const [state, dispatch] = useReducer(stateReducer, initialState, (init) => {
    console.log('INIT REDUCER', init);
    return init;
  });
  ['text', 'set', 'increment', 'decrement'].forEach((type) => {
    dispatch[type] = (payload) => dispatch({ type, payload });
  });
  const val = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return <ContextState.Provider value={val}>{children}</ContextState.Provider>;
}
