import React, { useContext } from "react";

import { ContextState } from "../Context";

const ToggleParams = () => {
  const { state, dispatch } = useContext(ContextState);
  window.dispatcher = dispatch;
  return (
    <div>
      <b>Params</b>: {console.log(state.params.length)}
      {![...state.params].length || (
        <small>
          <code>{`${state.params}`}</code>
        </small>
      )}
    </div>
  );
};

export default ToggleParams;
