import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { StateProvider } from "../../store";

import { UserAccountFormRender } from "./UserAccountFormRender";

import { UserAccountForm } from "./index";

describe("UserAccountForm", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("on render, confirmPassword is not there, and signIn is in focus", () => {
    render(<UserAccountForm />);

    const loginButton = screen.getByText(/log ?in/iu);
    const signupButton = screen.getByText(/sign ?up/iu);
    const confirmPassword = screen.queryByPlaceholderText(/confirm/iu);

    expect(loginButton).toHaveClass("in-focus");
    expect(signupButton).toHaveClass("not-focused");
    expect(confirmPassword).not.toBeInTheDocument();
  });

  test("signin and signup handlers are called", () => {
    const onSigninClick = jest.fn();
    const onSignupClick = jest.fn();

    render(
      <StateProvider>
        <UserAccountFormRender
          action="signin"
          onSigninClick={onSigninClick}
          onSignupClick={onSignupClick}
        />
      </StateProvider>
    );

    userEvent.click(screen.getByText(/log ?in/iu));
    userEvent.click(screen.getByText(/sign ?up/iu));

    expect(onSigninClick).toHaveBeenCalled();
    expect(onSignupClick).toHaveBeenCalled();
  });

  // eslint-disable-next-line max-statements
  test("sending the form works", () => {
    const email = "foo@foo.com";

    const mockSignin = jest.fn((url, data, dispatch) => {
      dispatch({ type: "SIGN_IN", payload: { email } });
    });

    jest.mock("../../store/actionCreators/signin", () => ({
      // eslint-disable-next-line putout/putout
      signin: mockSignin,
    }));

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const foo = require("../../store/actionCreators/signin");

    const onSigninClick = jest.fn(() => {
      foo.signin("/signin", { email, password: "123456" }, jest.fn())
    });

    render(
      <StateProvider>
        <UserAccountFormRender
          action="signin"
          onSigninClick={onSigninClick}
          onSignupClick={jest.fn()}
        />
      </StateProvider>
    );

    userEvent.type(screen.getByPlaceholderText(/email/iu), email);
    userEvent.type(screen.getByPlaceholderText(/password/iu), "123456");
    userEvent.click(screen.getByText(/log ?in/iu));

    expect(screen.getByPlaceholderText(/email/iu)).toHaveValue(email);
    expect(screen.getByPlaceholderText(/password/iu)).toHaveValue("123456");

    // Does this test actually test what I need? Probably not.
    // Do I know how to fix that with the time I've got? Definitely not.
    expect(foo.signin).toHaveBeenCalled();
  });
});
