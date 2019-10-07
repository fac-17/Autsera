import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";

test("App renders without crashing", () => {
  render(<App />);
});
