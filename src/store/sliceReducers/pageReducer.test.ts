import { PageState } from "../../types";

import { pageReducer } from "./pageReducer";

const basePage = {
  status: "frontPage",
  currentWordIndex: 4,
  resultsSaved: false,
  guess: { wrongGuess: false, rightGuess: true },
  passiveSelected: false,
  pluralSelected: false,
  revealAnswer: false,
} as PageState;

it("resets the word counter when getting a new batch of words", () => {
  const page = JSON.parse(JSON.stringify(basePage));
  const action = { type: "SET_WORDS" };
  const expectation = { ...page, currentWordIndex: -1 } as PageState;

  expect(pageReducer(page, action)).toEqual(expectation);
});

it("reacts to the back-end saving study session results to the DB", () => {
  const page = JSON.parse(JSON.stringify(basePage));
  const action = { type: "RESULTS_SAVED" };
  const expectation = { ...page, resultsSaved: true } as PageState;

  expect(pageReducer(page, action)).toEqual(expectation);
});

it("sets a wrong guess", () => {
  const page = JSON.parse(JSON.stringify(basePage));
  const action = {
    type: "SET_GUESS",
    payload: { property: "rightGuess", value: false },
  };
  const expectation = {
    ...page,
    guess: { ...page.guess, rightGuess: false },
  } as PageState;

  expect(pageReducer(page, action)).toEqual(expectation);
});

it("sets a right guess that makes all the guesses right", () => {
  const page = JSON.parse(JSON.stringify(basePage));
  const action = {
    type: "SET_GUESS",
    payload: { property: "wrongGuess", value: true },
  };
  const expectation = {
    ...page,
    guess: { ...page.guess, wrongGuess: true },
    revealAnswer: true,
  } as PageState;

  expect(pageReducer(page, action)).toEqual(expectation);
});

it("sets another kind of right guess", () => {
  const page = JSON.parse(JSON.stringify(basePage));
  const newPage = { ...page, guess: { ...page.guess, thirdGuess: false } };
  const action = {
    type: "SET_GUESS",
    payload: { property: "thirdGuess", value: true },
  };
  const expectation = {
    ...newPage,
    guess: { ...newPage.guess, thirdGuess: true },
  } as PageState;

  expect(pageReducer(page, action)).toEqual(expectation);
});

it("sets which main page component should load", () => {
  const page = JSON.parse(JSON.stringify(basePage));
  const action = { type: "SET_STATUS", payload: "done" };
  const expectation = { ...page, status: "done" } as PageState;

  expect(pageReducer(page, action)).toEqual(expectation);
});

it("toggles whether the verb suffixes shown are active or passive (deponent verbs)", () => {
  const page = JSON.parse(JSON.stringify(basePage));
  const action = { type: "TOGGLE_DEPONENT" };
  const expectation = { ...page, passiveSelected: true } as PageState;

  expect(pageReducer(page, action)).toEqual(expectation);
});

it("toggles whether the noun suffixes shown are singular or plural", () => {
  const page = JSON.parse(JSON.stringify(basePage));
  const action = { type: "TOGGLE_PLURAL" };
  const expectation = { ...page, pluralSelected: true } as PageState;

  expect(pageReducer(page, action)).toEqual(expectation);
});

it("does nothing with any other action", () => {
  const page = JSON.parse(JSON.stringify(basePage));
  const action = { type: "SOME_ACTION" };

  expect(pageReducer(page, action)).toEqual(page);
});
