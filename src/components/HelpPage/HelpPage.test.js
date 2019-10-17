import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HelpPage from "./HelpPage";
import {BrowserRouter as Router} from "react-router-dom";

test("The Help Page renders", () => {
  render(<Router><HelpPage /></Router>)
})

test("The Pause Button renders", () => {
  const { getByText } = render(<Router><HelpPage /></Router>);
  const pauseButton = getByText("Pause");
})

test("The Play Button renders", () => {
  const { getByText } = render(<Router><HelpPage play={false} /></Router>);
  const pauseButton = getByText("Pause");
})
