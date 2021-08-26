import React, { useContext } from "react";

import { ContextState } from "./Context";
import useFetch from "./useFetch";

import Counter from "./Counter";
import ToggleParams from "./ToggleParams";
import Comments from "./Comments";

const App = () => {
  const { state } = useContext(ContextState);
  useFetch(state.count);
  return (
    <React.Fragment>
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
