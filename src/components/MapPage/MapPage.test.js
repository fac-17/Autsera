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


test("Locked places render with locked class", () => {
  const completedOne = [1];
  const { getByText, container } = render(
    <Router>
      <MapPage completed={completedOne} />
    </Router>
  );

  const buttons = container.querySelectorAll(".place-circle");

  buttons.forEach((button, index) => {
    if (data.places[index].requiredStars < completedOne.length) {
      expect(button.className).toBe("place-circle unlocked")
    } else {
      expect(button.className).toBe("place-circle locked")
    }
  })
})

test("Click on locked place has no effect", () => {
  const completedOne = [];
  const { getByText, container, debug } = render(
    <Router>
      <MapPage completed={completedOne} />
    </Router>
  );

  const lockedButton = container.querySelectorAll(".locked")[0]; // Selects first locked Place
  const lockedLink = lockedButton.querySelector(".router-link"); // Selects link to that place
  fireEvent.click(lockedLink); // Simulates Click on locked place
  getByText("AUTSERA LAND"); // Checks if user still on the map page

})
