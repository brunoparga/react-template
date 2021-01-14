import React from "react";

import "./Button.css";

type Properties = {
  content: string;
  clicked: boolean;
};

// The button knows whether it is clicked to change its appearance accordingly.
// eslint-disable-next-line func-style
export const RadioButton: React.FunctionComponent<Properties> = ({
  content,
  clicked,
}) => (
  <button
    type="button"
    className={`item btn answer-btn white ${clicked ? "active" : "inactive"}`}
  >
    {content}
  </button>
);
