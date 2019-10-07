import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HomePage from "../components/HomePage";


test("The HomePage should render", () => {
  render(<HomePage />);
})




// should render
// should include start now button
// should have 'more info' button
// should display the avatar
