import React, { useContext, useEffect } from "react";

import { ContextState } from "./Context";
import useFetch from "./useFetch";

import Counter from "./Counter";
import ToggleParams from "./ToggleParams";
import Comments from "./Comments";

const App = () => {
  const { state, dispatch } = useContext(ContextState);
  const { isLoading, ...data } = useFetch(state.count);

  useEffect(() => {
    if (!isLoading) {
      dispatch.data({ ...data, isLoading });
      dispatch({ type: "text", payload: data?.title });
    }
  }, [state.id, state.params, isLoading, dispatch]);

  return (
    <React.Fragment>
      <h3 style={{ margin: 0, textTransform: "capitalize" }}>
        {state.data?.title}
      </h3>
      <hr />
      <Counter type={false} />
      <hr />
      <ToggleParams />
      <hr />
      <Comments />
    </React.Fragment>
  );
};

export default App;
