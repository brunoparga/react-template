import { AppReducer } from "../types";

import { combinedReducer } from "./combinedReducer";

import { crossSliceReducer } from ".";

// eslint-disable-next-line func-style
const rootReducer: AppReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);

  return crossSliceReducer(intermediateState, action);
};

export { rootReducer };
