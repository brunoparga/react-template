/* eslint-disable import/no-namespace */
import * as combined from "./combinedReducer";
import * as xSlice from "./crossSliceReducer";
import * as reducer from "./reducer";

it("calls both the reducer created by combining all the slices, and the cross-slice one", () => {
  const combinedReducer = jest.spyOn(combined, "combinedReducer");
  const crossSliceReducer = jest.spyOn(xSlice, "crossSliceReducer");

  reducer.rootReducer(combined.initialAppState, { type: "ANY_ACTION" });

  expect(combinedReducer).toHaveBeenCalled();
  expect(crossSliceReducer).toHaveBeenCalled();
});
