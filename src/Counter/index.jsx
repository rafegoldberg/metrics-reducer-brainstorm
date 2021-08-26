import React, { useContext } from "react";

import { ContextState } from "../Context";

import StepButtons from "./StepButtons";
import SetterInput from "./SetterInput";
import ResetButton from "./ResetButton";
import RandomValue from "./RandomValue";

const Counter = () => {
  const { state } = useContext(ContextState);
  return (
    <React.Fragment>
      <div className="topBar">
        <span style={{ whiteSpace: "nowrap", marginRight: ".5em" }}>
          <b>ID</b>:{" "}
          <small>
            <code>{state.id}</code>
          </small>
        </span>
        <span style={{ textTransform: "capitalize", textAlign: "right" }}>
          {state.text}
        </span>
      </div>
      <hr />
      <div className="buttonBar">
        <StepButtons />
        <RandomValue />
        <SetterInput />
        <ResetButton />
      </div>
    </React.Fragment>
  );
};

export default Counter;
