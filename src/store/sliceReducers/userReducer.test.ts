import { UserState } from "../../types";

import { userReducer } from "./userReducer";

it("signs a user in", () => {
  const user = { message: "not logged in" } as UserState;
  const action = { type: "SIGN_IN", payload: { email: "foo@bar.com" } };
  const expectation = { email: "foo@bar.com" } as UserState;

  expect(userReducer(user, action)).toEqual(expectation);
});

it("does nothing with the sign-in action if a user is already signed in", () => {
  const user = { email: "muchUserVeryLoggedIn@doge.wow" } as UserState;
  const action = { type: "SIGN_IN", payload: { email: "foo@bar.com" } };

  expect(userReducer(user, action)).toEqual(user);
});

it("signs a user out", () => {
  const user = { email: "muchUserVeryLoggedIn@doge.wow" } as UserState;
  const action = { type: "SIGN_OUT" };
  const expectation = { message: "Signed out." } as UserState;

  expect(userReducer(user, action)).toEqual(expectation);
});

it("does nothing with any other action", () => {
  const user = { message: "not logged in" } as UserState;
  const action = { type: "ANY_OTHER", payload: { baz: "quux" } };

  expect(userReducer(user, action)).toEqual(user);
});
