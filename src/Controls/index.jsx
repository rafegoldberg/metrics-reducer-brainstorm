import React, { useContext } from "react";

import { ContextState } from "../Context";

import StepButtons from "./StepButtons";
import SetterInput from "./SetterInput";
import ResetButton from "./ResetButton";
import RandomValue from "./RandomValue";
import ParamsBar from "./ParamsBar";

const Counter = () => {
  const { state, dispatch } = useContext(ContextState);
  return (
    <React.Fragment>
      <hr />
      <div className="buttonBar">
        <RandomValue />
        <StepButtons />
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
      <hr />
      <ParamsBar />
      <hr />
    </React.Fragment>
  );
};

export default Counter;
