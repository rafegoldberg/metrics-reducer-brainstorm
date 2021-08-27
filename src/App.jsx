import React, { useContext, useEffect } from "react";

import { ContextState } from "./Context";
import useFetch from "./useFetch";

import Controls from "./Controls";
import Comments from "./Comments";

const App = () => {
  const { state, dispatch } = useContext(ContextState);
  const { isLoading, ...data } = useFetch(state.count);

  useEffect(() => {
    if (!isLoading) {
      dispatch.data({ ...data, isLoading });
      dispatch({ type: "text", payload: data?.title });
    }
  }, [
    state.id,
    state.params,
    isLoading,
    dispatch
    /* can't include `data` here */
  ]);

  return (
    <React.Fragment>
      <h1 style={{ textTransform: "capitalize" }}>
        {state.data?.title || <label for="id">(Set an ID)</label>}
      </h1>
      <Controls type={false} />
      <Comments />
    </React.Fragment>
  );
};

export default App;
