import React, { useContext } from "react";

import { ContextState } from "./Context";

import Counter from "./Counter";
import ToggleParams from "./ToggleParams";
import Comments from "./Comments";
import Fetcher from "./Fetcher";

const App = () => {
  const { state } = useContext(ContextState);
  return (
    <React.Fragment>
      <Fetcher />
      <hr />
      <ToggleParams />
      <hr />
      <Counter type={false} />
      <hr />
      <h3 style={{ textTransform: "capitalize" }}>{state.data?.title}</h3>
      <Comments />
    </React.Fragment>
  );
};

export default App;
