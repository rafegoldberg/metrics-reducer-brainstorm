import React from "react";

import Counter from "./Counter";
import ToggleParams from "./ToggleParams";
import Comments from "./Comments";

import Fetcher from "./Fetcher";

const App = () => (
  <React.Fragment>
    <Fetcher />
    <ToggleParams />
    <hr />
    <Counter type={false} />
    <hr />
    <Comments />
  </React.Fragment>
);

export default App;
