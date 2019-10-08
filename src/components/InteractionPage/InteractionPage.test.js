import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InteractionPage from "./InteractionPage";
import { BrowserRouter as Router } from "react-router-dom";

test("The Interaction Page renders", () => {
  render(
    <Router>
      <InteractionPage id="1" />
    </Router>
  );
});
