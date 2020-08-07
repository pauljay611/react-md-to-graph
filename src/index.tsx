import * as React from "react";
import * as ReactDOM from "react-dom";
import "./style/global.css";

import { Hello } from "./components/Hello";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("app")
);
