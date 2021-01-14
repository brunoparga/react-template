import React from "react";

import { Action, AppState, AppStateWithDispatch } from "../types";

import { actions, initialAppState, rootReducer } from ".";

const store = React.createContext<AppStateWithDispatch>({
  state: initialAppState,
  dispatch: () => undefined,
});

// eslint-disable-next-line func-style
const StateProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch]: [
    AppState,
    React.Dispatch<Action>
  ] = React.useReducer(rootReducer, initialAppState);

  if (!state.user.email) {
    const storedEmail = localStorage.getItem("email");

    if (storedEmail) {
      dispatch({ ...actions.SIGN_IN, payload: { email: storedEmail } });
    }
  }

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};

export { StateProvider, store };
