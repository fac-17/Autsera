import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HelpPage from "../components/HelpPage";

test("The Help Page renders", () => {
  render(<HelpPage />)
})
