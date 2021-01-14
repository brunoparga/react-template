import React from "react";

import { actions, store } from "../../store";

import { Button } from "./private";
import "./Buttons.css";

type Properties = {
  label: string;
  items: string[];
  correctAnswer: string;
};

// eslint-disable-next-line func-style
export const Buttons: React.FunctionComponent<Properties> = ({
  label,
  items,
  correctAnswer,
}) => {
  const { dispatch } = React.useContext(store);
  const [selected, setSelected] = React.useState("");

  // Ensure at most one button per row is selected
  function clickHandler(event: React.SyntheticEvent) {
    const elt = event.target as HTMLElement;

    if (elt.tagName === "BUTTON" && elt.textContent === selected) {
      // Clicking an already selected button deselects it
      setSelected("");
    } else if (elt.tagName === "BUTTON") {
      setSelected(elt.textContent as string);

      const property = label.toLowerCase();
      const value = elt.textContent === correctAnswer;

      dispatch({ ...actions.SET_GUESS, payload: { property, value } });
    }
  }

  function keyUpHandler(event: React.KeyboardEvent) {
    if (event.key === " " || event.key === "Enter") {
      clickHandler(event as React.SyntheticEvent);
    }
  }

  // This <div> element has children <button> elements that allow keyboard
  // interaction.
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="buttons" onClick={clickHandler} onKeyUp={keyUpHandler}>
      <div className="item label">{label}</div>
      {items.map((item) => (
        <Button content={item} key={item} clicked={item === selected} />
      ))}
    </div>
  );
};
