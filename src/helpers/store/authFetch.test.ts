import { authFetch } from "./authFetch";

it("adds the JSON Web Token to the request", () => {
  // Setup
  const token = "someJSONWebToken";

  localStorage.setItem("token", token);
  jest.spyOn(global, "fetch");

  // Exercise
  const url = "api.foo.com";
  const options = { method: "POST" };

  authFetch(url, options);

  // Verify
  expect(global.fetch).toHaveBeenCalledWith(url, {
    ...options,
    headers: { Authorization: `Bearer ${token}` },
  });

  // Teardown
  localStorage.clear();
  jest.clearAllMocks();
});
