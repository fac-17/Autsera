import React from "react";
import { render, fireEvent, getByTitle } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import data from "../../data/data";
import InteractionCircle from "./InteractionCircle";

const example = {
  id: 1,
  text: "Leonie and Reuben fighting",
  image: "leoniereuben.png",
  coordinates: [20, 10],
  radius: 12,
  requiredStars: 0,
  answers: [
    {
      id: 2,
      text: "they are fighting",
      correct: true,
      response: "Correct! They look like they are fighting"
    },
    {
      id: 3,
      text: "playing",
      correct: false,
      response: "Look again! Do they look like they are having fun?"
    },
    {
      id: 4,
      text: "upset",
      correct: true,
      response: "Correct! They look upset"
    },
    {
      id: 5,
      text: "happy",
      correct: false,
      response: "Look again, are they smiling?"
    }
  ],
  hints: [
    {
      id: 6,
      text: "Look at their faces, are they smiling?",
      answers: [4, 5]
    },
    {
      id: 7,
      text: "Look if they are having fun?",
      answers: [2, 3]
    }
  ]
};

test("if it renders the InteractionCircle", () => {
  render(
    <Router>
      <InteractionCircle interaction={example} />
    </Router>
  );
});

test("if it has the name of the interaction", () => {
  const { getByText } = render(
    <Router>
      <InteractionCircle interaction={example} />
    </Router>
  );
  getByText(example.text);
});

test("if it has the link of the interaction", () => {
  const { getByTitle } = render(
    <Router>
      <InteractionCircle interaction={example} />
    </Router>
  );
  const link = getByTitle(example.text);
  expect(link.href).toMatch(new RegExp("/interaction/" + example.id));
});
