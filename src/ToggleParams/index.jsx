import React, { useContext } from "react";

import { ContextState } from "../Context";

const ToggleParams = () => {
  const { state, dispatch } = useContext(ContextState);
  window.dispatcher = dispatch;
  return (
    <p>
      <b>Params</b>: {`${state.params}`}
    </p>
  );
};

export default ToggleParams;
