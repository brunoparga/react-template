import React from "react";

import { actions, store } from "../../store";
import "../shared/Topbar.css";

// eslint-disable-next-line func-style
export const SignoutButton: React.FunctionComponent = () => {
  const { dispatch } = React.useContext(store);

  function handleClick() {
    localStorage.clear();
    dispatch(actions.SIGN_OUT);
  }

  return (
    <button type="button" className="btn form-btn" onClick={handleClick}>
      Log out
    </button>
  );
};
