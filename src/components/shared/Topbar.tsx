import React from "react";

import { actions, store } from "../../store";
import { UserState } from "../../types";
import { SignoutButton, UserAccountForm } from "../UserAccountForm";
import "./Topbar.css";

// eslint-disable-next-line func-style
export const Topbar: React.FunctionComponent = () => {
  const {
    state: { user },
    dispatch,
  } = React.useContext(store);
  const { message, email } = user as UserState;
  const text = message || email;

  function toFrontPage() {
    dispatch({ ...actions.SET_STATUS, payload: "frontPage" });
  }

  function keyUpHandler(event: React.KeyboardEvent) {
    if (event.key === " " || event.key === "Enter") {
      toFrontPage();
    }
  }

  return (
    <div className="navbar">
      <div
        className="title white"
        onClick={toFrontPage}
        onKeyUp={keyUpHandler}
        role="link"
        tabIndex={0}
      >
        React App
      </div>
      <div className="white">{text}</div>
      {email ? <SignoutButton /> : <UserAccountForm />}
    </div>
  );
};
