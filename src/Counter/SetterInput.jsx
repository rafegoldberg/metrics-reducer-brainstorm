import React, { useContext } from "react";

import { ContextState } from "../Context";

const SetterInput = () => {
  const {
    state: { id },
    dispatch,
    ...rest
  } = useContext(ContextState);
  return (
    <input
      type="number"
      max={100}
      min={-100}
      step={3}
      value={id}
      onInput={(e) =>
        dispatch({ type: "set", payload: parseInt(e.target.value) })
      }
      style={{ flex: "0 1", minWidth: 42 }}
    />
  );
};

export default SetterInput;
