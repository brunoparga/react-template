import { Action } from "../types";

const types = [
  // Page actions
  "RESULTS_SAVED",
  "SET_STATUS",

  // User actions
  "SIGN_IN",
  "SIGN_OUT",
] as const;

export const actions: Record<string, Action> = types.reduce(
  (accumulator, type) => ({ ...accumulator, [type]: { type } }),
  {}
);
