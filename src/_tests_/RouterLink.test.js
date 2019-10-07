import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RouterLink from "../components/RouterLink";

test("RouterLink renders", () => {
  const { getByText } =  render(
    <div>
      <Router>
        <RouterLink to="/" label="Test router link" />
      </Router>
    </div>
  )
  getByText("Test router link");
})
