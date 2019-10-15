import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HomePage from "./HomePage";
import { BrowserRouter as Router } from "react-router-dom";

test("The HomePage should render", () => {
  render(
    <Router>
      <HomePage completed={[]} />
    </Router>
  );
});

test("The HomePage doesn't include 'Continue' button for a new user", () => {
  const { getByText, queryByText } = render(
    <Router>
      <HomePage completed={[]} />
    </Router>
  );
  expect(queryByText("Continue Playing")).toBe(null);
  getByText("New Game");
});

test("The HomePage includes both Buttons if the user has unlocked at least one level", () => {
  const { getByText } = render(
    <Router>
      <HomePage completed={[1]} />
    </Router>
  );
  getByText("Continue Playing");
  getByText("New Game");
});
