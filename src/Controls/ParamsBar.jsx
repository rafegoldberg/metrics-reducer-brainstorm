import React, { useContext } from "react";

import { ContextState } from "../Context";

const ParamsBar = () => {
  const { state, dispatch } = useContext(ContextState);
  window.dispatcher = dispatch;
  return (
    <small className="topBar">
      <span>
        <b>ID</b>:{" "}
        <small>
          <code>{state.id}</code>
        </small>
      </span>
      <span>
        <b>Params</b>:{" "}
        <small>
          {[...state.params].length ? (
            <code>{`${state.params}`}</code>
          ) : (
            <code style={{ opacity: 0.5 }}>none</code>
          )}
        </small>
      </span>
    </small>
  );
};

export default ParamsBar;
