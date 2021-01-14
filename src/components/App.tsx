import React from "react";

import { Topbar } from "./shared";
import "./App.css";

// Either show a loading screen or the loaded app.
// eslint-disable-next-line func-style
export const App: React.FunctionComponent = () => {
  return (
    <>
      <Topbar />
      <div className="App">Main page Components go here</div>
    </>
  );
};
