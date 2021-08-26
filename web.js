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
  "\n%s\nRun %c%s%c to see some cool shit happen.\n",
  "Based on the https://jsonplaceholder.typicode.com API.",
  "font-weight:bold;font-family:fira code,source code pro,menlo,monospace",
  "dispatcher.params('set', { _embed: 'comments' })",
  ""
);
