import React, { useContext } from "react";

import { ContextState } from "../Context";

const ResetButton = () => {
  const { dispatch } = useContext(ContextState);
  return <button onClick={() => dispatch.set(1)}>Reset</button>;
};

export default ResetButton;
