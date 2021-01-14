import React from "react";
import { render } from "@testing-library/react";

import { App } from "./App";

test("renders learn Latin text", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/latin language learning/iu);

  expect(linkElement).toBeInTheDocument();
});
