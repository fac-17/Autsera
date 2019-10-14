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

test("The HomePage should include the Buttons", () => {
  const { getByText } = render(
    <Router>
      <HomePage completed={[1]} />
    </Router>
  );
  getByText("Continue Playing");
  getByText("New Game");
});

test("The HomePage should not include Continue buttons", () => {
  const { getByText, queryByText } = render(
    <Router>
      <HomePage completed={[]} />
    </Router>
  );
  expect(queryByText("Continue Playing")).toBe(null);
  getByText("New Game");
});

// should have 'more info' button
// should display the avatar
