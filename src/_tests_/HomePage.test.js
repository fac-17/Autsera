import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HomePage from "../components/HomePage";


test("The HomePage should render", () => {
  render(<HomePage />);
})

test("The HomePage should include the StartButton", () => {
  const { getByText } = render(<HomePage />);
  getByText("START PLAYING!");
})



// should render
// should include start now button
// should have 'more info' button
// should display the avatar
