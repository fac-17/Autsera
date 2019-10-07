import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HomePage from "./HomePage";
import {BrowserRouter as Router} from "react-router-dom";

test("The HomePage should render", () => {
  render(<Router><HomePage /></Router>);
})

test("The HomePage should include the StartButton", () => {
  const { getByText } = render(<Router><HomePage /></Router>);
  getByText("START PLAYING!");
})

test("The StartButton on HomePage uses function passed to HomePage",()=>{
  const startFunction=jest.fn();
  const { getByText } = render(<Router><HomePage startFunction={startFunction}/></Router>);
  const button=getByText("START PLAYING!");
  fireEvent.click(button);
  expect(startFunction).toHaveBeenCalledTimes(1);
})



// should have 'more info' button
// should display the avatar
