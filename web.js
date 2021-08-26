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

console.log(
  "Run %c%s%c to see some cool shit happen.",
  "font-weight:bold;font-family:fira code,source code pro,menlo,monospace",
  "dispatcher.params('set', { _embed: 'comments' })",
  ""
);
