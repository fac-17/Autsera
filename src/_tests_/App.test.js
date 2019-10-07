import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import { render } from "@testing-library/react";

test("App renders without crashing", () => {
  render(<App />);
});
