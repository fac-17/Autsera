import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import data from "../data/data";
import { render, fireEvent } from "@testing-library/react";

test("App renders without crashing", () => {
  render(<App />);
});

test("User journey from initial App render", () => { // Relies on hard-coded dummy data
  const firstPlace = data.places.find(el=>el.id===0);
  const firstInteraction = data.places[0].interactions.find(el=>el.id===1);

  const { getByText, getByAltText, container, debug } = render(<App />);
  const newGame = getByText("New Game"); // Starting from home page, clicks through to map, then place, then interaction page.

  fireEvent.click(newGame);
  expect(container.querySelectorAll(".place-circle").length).toBe(data.places.length); // Checks every place in the data render on the map
  let currentlyUnlocked = container.querySelectorAll(".unlocked").length;

  fireEvent.click(getByText(firstPlace.text));
  expect(container.querySelectorAll(".interaction-circle").length).toBe(firstPlace.interactions.length); // Checks every interaction in the data render in the place

  fireEvent.click(getByText(firstInteraction.text));
  expect(container.querySelectorAll(".btn-answer").length).toBe(firstInteraction.answers.length); // Checks all available answers render on the interaction
  firstInteraction.answers.forEach((answer) => { // Clicks all correct answer
    if (answer.correct) {
      fireEvent.click(getByText(answer.text))
    }
  })
  getByText("You have gained a star"); // Checks congratulatory message comes up after selecting all correct answers

  fireEvent.click(getByText("Go Back"));
  expect(container.querySelectorAll(".unlocked").length).toBe(currentlyUnlocked + 1); // Checks one additional interaction is now available in the place
})
