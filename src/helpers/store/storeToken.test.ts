import { storeToken } from "./storeToken";

const data = { token: "someJSONWebToken", email: "foo@bar.com" };

it("stores the token in localStorage", () => {
  storeToken(data);
  expect(localStorage.getItem("token")).toEqual("someJSONWebToken");
  expect(localStorage.getItem("email")).toEqual("foo@bar.com");
});

it("returns the user email", () => {
  expect(storeToken(data)).toEqual("foo@bar.com");
});
