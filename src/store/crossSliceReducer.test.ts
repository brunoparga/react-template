import { AppState } from "../types";
import { setPageOnNewWord } from "../helpers";

import { words } from "./testHelpers/words";

import { crossSliceReducer, initialAppState, initialPageState } from ".";

const baseState = {
  ...initialAppState,
  words,
  page: { status: "studying" },
} as AppState;

it("sets the page status to done when there are no more words to study", () => {
  const currentWordIndex = 2;
  const givenState = {
    ...baseState,
    word: words[currentWordIndex],
    page: { currentWordIndex },
  } as AppState;

  const expectedState = {
    ...givenState,
    word: (undefined as unknown) as Word,
    page: { ...initialPageState, status: "done" },
  } as AppState;

  expect(crossSliceReducer(givenState, { type: "SET_WORD" })).toEqual(
    expectedState
  );
});

it("sets the page object with an unlearned word", () => {
  const currentWordIndex = 0;
  const givenState = {
    ...baseState,
    word: words[currentWordIndex],
    page: { currentWordIndex },
  } as AppState;

  const page = setPageOnNewWord(
    givenState.words[currentWordIndex + 1],
    givenState.page.currentWordIndex + 1
  );

  const expectedState = {
    ...givenState,
    page,
    word: words[currentWordIndex + 1],
  } as AppState;

  expect(crossSliceReducer(givenState, { type: "SET_WORD" })).toEqual(
    expectedState
  );
});

it("sets the page object and word options with a word being reviewed", () => {
  const currentWordIndex = 1;
  const learnedWords = words.map((word) => ({ ...word, learned: true }));
  const givenState = {
    ...baseState,
    words: learnedWords,
    word: learnedWords[currentWordIndex],
    page: { currentWordIndex },
  } as AppState;

  const page = setPageOnNewWord(
    givenState.words[currentWordIndex + 1],
    givenState.page.currentWordIndex + 1
  );

  const word = learnedWords[currentWordIndex + 1];
  const options = expect.arrayContaining(word.options.concat([word.lemma]));

  const expectedState = {
    ...givenState,
    page,
    word: { ...word, options },
  } as AppState;

  expect(crossSliceReducer(givenState, { type: "SET_WORD" })).toEqual(
    expectedState
  );
});

it("does nothing with other actions", () => {
  expect(crossSliceReducer(initialAppState, { type: "SET_WORDS" })).toEqual(
    initialAppState
  );
});
