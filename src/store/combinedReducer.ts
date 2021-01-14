import combineReducers from "react-combine-reducers";

import { Action, AppReducer } from "../types";

import { initialPageState } from "./initialPageState";
import { page, user } from "./sliceReducers";

const [combinedReducer, initialAppState] = combineReducers<AppReducer>({
  page: [page, initialPageState],
  user: [user, { message: "" }],
});

export { combinedReducer, initialAppState };
