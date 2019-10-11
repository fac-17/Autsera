import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HomePage from "./HomePage";
import {BrowserRouter as Router} from "react-router-dom";

test("The HomePage should render", () => {
  render(<Router><HomePage /></Router>);
})

test("The HomePage should include the StartButton", () => {
  const { getByText } = render(<Router><HomePage /></Router>);
  getByText("Start Playing");
})




// should have 'more info' button
// should display the avatar
