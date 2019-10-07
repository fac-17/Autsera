import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HelpPage from "./HelpPage";
import {BrowserRouter as Router} from "react-router-dom";

test("The Help Page renders", () => {
  render(<Router><HelpPage /></Router>)
})
