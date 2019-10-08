import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MapPage from "./MapPage";
import { BrowserRouter as Router } from "react-router-dom";
import data from "../../data/data";

test("The Map Page renders", () => {
  render(
    <Router>
      <MapPage />
    </Router>
  );
});

test("MapPage includes a Go Back Button", () => {
  const { getByText } = render(
    <Router>
      <MapPage />
    </Router>
  );
  getByText("Go Back");
});

test("MapPage includes a Playground Button", () => {
  const { getByText } = render(
    <Router>
      <MapPage />
    </Router>
  );
  getByText("Playground");
});

test("Places rendered on the map match places available on data", () => {
  const { getByText } = render(
    <Router>
      <MapPage />
    </Router>
  );

  data.places.map(place => {
    getByText(place.text);
  })
})
