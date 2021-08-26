import React, { useContext } from "react";

import Counter from "./Counter";
import ToggleParams from "./ToggleParams";

import Fetcher from "./Fetcher";
// import useFetch from "./useFetch";
// import { ContextState } from "./Context";

const App = () => {
  // const { state } = useContext(ContextState);
  // useFetch(state.id);
  return (
    <React.Fragment>
      <Fetcher />
      <ToggleParams />
      <hr />
      <Counter type={false} />
    </React.Fragment>
  );
};

export default App;
