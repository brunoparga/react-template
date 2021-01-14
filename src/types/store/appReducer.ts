import { Action, AppState } from ".";

export type AppReducer = (
  state: AppState,
  { type, payload }: Action
) => AppState;
