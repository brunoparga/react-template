import { Dispatch } from "react";

import { AppState } from "./appState";

type Action = {
  type: string;
  payload?: unknown;
  error?: boolean;
  meta?: unknown;
};

type AppStateWithDispatch = {
  state: AppState;
  dispatch: Dispatch<Action>;
};

export type { Action, AppStateWithDispatch };
