import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/App";
import { StateProvider } from "./store";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    {/* This app uses a no-Redux approach to state management, with Context
    and Hooks */}
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
