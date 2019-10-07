import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PlacePage from "./PlacePage";
import { BrowserRouter as Router } from "react-router-dom";

test("The Place Page renders", () => {
  render(
    <Router>
      <PlacePage />
    </Router>
  );
});
