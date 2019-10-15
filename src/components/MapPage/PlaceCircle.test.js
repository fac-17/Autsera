import React from "react";
import { render, fireEvent, getByTitle } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import data from "../../data/data";
import PlaceCircle from "./PlaceCircle";

const testPlace = data.places[0];
//sample completed interactions array
const completed = [1, 8, 13];

test("placeCircle renders when given a place", () => {
  render(
    <Router>
      <PlaceCircle place={testPlace} completed={completed} />
    </Router>
  );
});

test("placeCircle renders the text of the place correctly", () => {
  const { getByText } = render(
    <Router>
      <PlaceCircle place={testPlace} completed={completed} />
    </Router>
  );
  getByText(testPlace.text);
});

test("placeCircle renders with the right link", () => {
  const { getByTitle } = render(
    <Router>
      <PlaceCircle place={testPlace} completed={completed} />
    </Router>
  );
  const placeLink = getByTitle(testPlace.text);
  expect(placeLink.href).toMatch(new RegExp("/place/" + testPlace.id));
});
