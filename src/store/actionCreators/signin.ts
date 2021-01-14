import React from "react";

import { Action, UserAccountInputs } from "../../types";
import { actions } from "..";
import { storeToken } from "../../helpers";

async function signin(
  actionURL: string,
  formData: UserAccountInputs,
  dispatch: React.Dispatch<Action>
): Promise<void> {
  const response = await fetch(actionURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  const payload = await response.json();

  if (payload.email) {
    const email = storeToken(payload);

    dispatch({ ...actions.SIGN_IN, payload: { email } });
  }

  dispatch({ ...actions.SIGN_IN, payload });
}

export { signin };
