import React from "react";
import { useForm } from "react-hook-form";

import { signin, store } from "../../store";
import { UserAccountInputs } from "../../types";

import "./index.css";

// Sorry for writing such a complex function, I wasn't smart enough to write a
// simpler one.
// eslint-disable-next-line func-style, sonarjs/cognitive-complexity
export const UserAccountForm: React.FunctionComponent = () => {
  const { dispatch } = React.useContext(store);

  const [action, setAction] = React.useState("signin");
  const actionURL = `${process.env.REACT_APP_API_URL}/${action}`;
  const { register, errors, watch } = useForm<UserAccountInputs>();

  function onSigninClick() {
    if (action === "signin") {
      const signinData = { email: watch("email"), password: watch("password") };

      signin(actionURL, signinData, dispatch);
    } else {
      setAction("signin");
    }
  }

  function onSignupClick() {
    if (action === "signup") {
      const signupData = {
        email: watch("email"),
        password: watch("password"),
        confirmPassword: watch("confirmPassword"),
      };

      // From the front-end's point of view, the only difference between
      // successfully signing in and signing up is sending the password
      // confirmation; a separate signup action is not needed.
      signin(actionURL, signupData, dispatch);
    } else {
      setAction("signup");
    }
  }

  return (
    <form>
      <input
        type="text"
        name="email"
        placeholder="Email"
        ref={register({ required: true })}
      />
      {errors.email && <span className="white">This field is required</span>}
      <input
        type="password"
        name="password"
        placeholder="Password"
        ref={register({ required: true })}
      />
      {errors.password && <span className="white">This field is required</span>}
      {action === "signup" && (
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          ref={register({ required: true })}
        />
      )}
      {action === "signup" && errors.confirmPassword && (
        <span className="white">This field is required</span>
      )}
      <button
        type="button"
        className={`btn form-btn ${
          action === "signin" ? "in-focus white" : "not-focused"
        }`}
        onClick={onSigninClick}
      >
        Log in
      </button>
      <button
        type="button"
        className={`btn form-btn ${
          action === "signup" ? "in-focus white" : "not-focused"
        }`}
        onClick={onSignupClick}
      >
        Sign up
      </button>
    </form>
  );
};

export { SignoutButton } from "./SignoutButton";
