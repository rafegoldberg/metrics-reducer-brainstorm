import React, { useMemo, useReducer } from "react";

export const ContextState = React.createContext();

const initialState = {
  id: 26,
  text: "Hi World",
  data: {},
  path: "posts",
  params: new URLSearchParams()
};

const createParams = ({ args = {}, method = "set", ...state }) => {
  const params = new URLSearchParams(`${state?.params || ""}`);
  if (["set", "append"].includes(method))
    for (const key in args) {
      if (args?.[key]) params[method](key, args[key]);
      else params.delete(key);
    }
  state.params = params;
  return state;
};

function stateReducer(state = initialState, { type, payload, ...args }) {
  switch (type) {
    case "data":
      return { ...state, data: payload || {} };
    case "params":
      return createParams({ args, method: payload, ...state });
    case "text":
      return { ...state, text: payload };
    case "set":
      return { ...state, id: payload };
    case "increment":
      return { ...state, id: state.id + 1 };
    case "decrement":
      return { ...state, id: state.id - 1 };
    default:
      console.error(`No action "${type}" found.`);
      return state;
  }
}

export default function ContextWrap({ children }) {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  ["data", "params", "text", "set", "increment", "decrement"].forEach(
    (type) => {
      dispatch[type] = (payload, args = {}) => {
        // console.log("DISPATCH SHORTHAND");
        dispatch({ type, payload, ...args });
      };
    }
  );
  const val = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return <ContextState.Provider value={val}>{children}</ContextState.Provider>;
}
