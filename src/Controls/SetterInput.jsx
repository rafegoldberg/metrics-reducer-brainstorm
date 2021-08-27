import React, { useContext } from "react";

import { ContextState } from "../Context";

const SetterInput = () => {
  const { state, dispatch } = useContext(ContextState);
  return (
    <input
      id="id"
      name="id"
      type="number"
      max={100}
      min={-100}
      value={state.id}
      onInput={(e) =>
        dispatch({ type: "set", payload: parseInt(e.target.value, 10) })
      }
      style={{ flex: "0 1", minWidth: 42 }}
    />
  );
};

export default SetterInput;
