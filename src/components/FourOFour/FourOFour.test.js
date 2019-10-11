import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FourOFour from "./FourOFour";
import { BrowserRouter as Router } from "react-router-dom";

test("The 404 Page renders", () => {
  render(
    <Router>
      <FourOFour />
    </Router>
  );
});
