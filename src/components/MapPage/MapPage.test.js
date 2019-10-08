import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MapPage from "./MapPage";
import { BrowserRouter as Router } from "react-router-dom";
import data from "../../data/data";
//sample completed array for tests
const completed = [1, 8, 13];
test("The Map Page renders", () => {
  render(
    <Router>
      <MapPage completed={completed} />
    </Router>
  );
});

test("MapPage includes a Go Back Button", () => {
  const { getByText } = render(
    <Router>
      <MapPage completed={completed} />
    </Router>
  );
  getByText("Go Back");
});

test("MapPage includes a Playground Button", () => {
  const { getByText } = render(
    <Router>
      <MapPage completed={completed} />
    </Router>
  );
  getByText("Playground");
});

test("Places rendered on the map match places available on data", () => {
  const { getByText } = render(
    <Router>
      <MapPage completed={completed} />
    </Router>
  );

  data.places.map(place => {
    getByText(place.text);
  });
});
