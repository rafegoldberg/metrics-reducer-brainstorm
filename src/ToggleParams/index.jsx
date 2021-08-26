import React, { useContext } from "react";

import { ContextState } from "../Context";

const ToggleParams = () => {
  const { state, dispatch } = useContext(ContextState);
  window.dispatcher = dispatch;
  return (
    <small>
      <b>Params</b>:{" "}
      {![...state.params].length || (
        <small>
          <code>{`${state.params}`}</code>
        </small>
      )}
    </small>
  );
};

export default ToggleParams;
