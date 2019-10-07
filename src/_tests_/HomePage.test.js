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

test("The StartButton on HomePage uses function passed to HomePage",()=>{
  const startFunction=jest.fn();
  const { getByText } = render(<HomePage startFunction={startFunction}/>);
  const button=getByText("START PLAYING!");
  fireEvent.click(button);
  expect(startFunction).toHaveBeenCalledTimes(1);
})

// should render
// should include start now button
// should have 'more info' button
// should display the avatar
