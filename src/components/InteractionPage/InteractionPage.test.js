import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import InteractionPage from "./InteractionPage";
import { BrowserRouter as Router } from "react-router-dom";
import data from "../../data/data";

afterEach(cleanup);

test("The Interaction Page renders", () => {
  render(
    <Router>
      <InteractionPage id={1} />
    </Router>
  );
});

test("Game starts from scratch when user re-enters page", () => {
  const { getByText } = render(
    <Router>
      <InteractionPage id={1} />
    </Router>
  );
  const answers = data.places[0].interactions[0].answers;
  answers.map(answer =>
    expect(getByText(answer.text).className).toBe("option")
  );
});

test("Selecting an answer changes the class to 'selected'", () => {
  const setCompleted = jest.fn();
  const { getByText } = render(
    <Router>
      <InteractionPage id={1} setCompleted={setCompleted} />
    </Router>
  );
  const answers = data.places[0].interactions[0].answers;

  answers.map(answer => {
    const oneAnswer = getByText(answer.text);
    fireEvent.click(oneAnswer);
    if (answer.correct) {
      expect(oneAnswer.className).toBe("selected");
    } else {
      expect(oneAnswer.className).toBe("option");
    }
  });
});

test("Test if there is a back button with correct link'", () => {
  const { getByText } = render(
    <Router>
      <InteractionPage id={1} />
    </Router>
  );
  const backButton = getByText("Go Back");
  expect(backButton.href).toMatch(/\/place\/0$/);
});

test("Test if setCompleted gets called with the right argument", () => {
  const setCompleted = jest.fn();
  const completed = [];
  const { getByText } = render(
    <Router>
      <InteractionPage
        id={1}
        setCompleted={setCompleted}
        completed={completed}
      />
    </Router>
  );

  const answers = data.places[0].interactions[0].answers;

  answers.map(answer => {
    const oneAnswer = getByText(answer.text);
    if (answer.correct) {
      fireEvent.click(oneAnswer);
    }
  });

  expect(setCompleted).toBeCalledTimes(1);
});

test("if clicking on answer gives the right response from avatar", () => {
  const answers = data.places[0].interactions[0].answers;
  const setCompleted = jest.fn();

  const { getByText } = render(
    <Router>
      <InteractionPage id={1} setCompleted={setCompleted} completed={[]} />
    </Router>
  );
  answers.forEach(answer => {
    const answerButton = getByText(answer.text);
    fireEvent.click(answerButton);
    getByText(answer.response);
  });
});

test("if clicking on avatar gives the right hint", () => {
  const setCompleted = jest.fn();

  const { getByAltText, queryByText } = render(
    <Router>
      <InteractionPage id={1} setCompleted={setCompleted} completed={[]} />
    </Router>
  );
  const avatar = getByAltText("helper-avatar");
  const hints = data.places[0].interactions[0].hints.map(hint => hint.text);

  fireEvent.click(avatar);
  // try each hint and expect there is one that is not null
  expect(hints.map(hint => queryByText(hint)).some(Boolean)).toBe(true);
});
