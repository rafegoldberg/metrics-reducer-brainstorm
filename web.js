import React from "react";
import ReactDOM from "react-dom";

import App from "./src/App";
import StateContext from "./src/Context";

const elem = (
  <StateContext>
    <App />
  </StateContext>
);
const root = document.getElementById("App");

ReactDOM.render(elem, root);
