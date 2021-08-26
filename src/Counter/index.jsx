import React, { useContext } from "react";

import { ContextState } from "../Context";

import StepButtons from "./StepButtons";
import SetterInput from "./SetterInput";
import ResetButton from "./ResetButton";
import RandomValue from "./RandomValue";

const Counter = () => {
  const { state, dispatch } = useContext(ContextState);
  return (
    <React.Fragment>
      <small className="topBar">
        <span style={{ whiteSpace: "nowrap", marginRight: ".5em" }}>
          <b>ID</b>:{" "}
          <small>
            <code>{state.id}</code>
          </small>
        </span>
      </small>
      <hr />
      <div className="buttonBar">
        <StepButtons />
        <RandomValue />
        <SetterInput />
        <label>
          <input
            type="checkbox"
            checked={state.params.has("_embed")}
            onChange={() =>
              dispatch.params("set", {
                _embed: state.params.has("_embed") ? null : "comments"
              })
            }
          />
          Comments
        </label>
        <ResetButton />
      </div>
    </React.Fragment>
  );
};

export default Counter;
