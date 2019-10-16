import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PlacePage from "./PlacePage";
import { BrowserRouter as Router } from "react-router-dom";
import data from "../../data/data";
import { countStarsInPlace } from "../../utils/starsCounting";
const first = data.places.find((el) => el.id === 0);

const completed = [1, 8, 16]; // For test purposes only

test("The Place Page renders", () => {
  render(
    <Router>
      <PlacePage id={first.id} completed={completed} />
    </Router>
  );
});

test("PlacePage has links to all interactions", () => {
  const { getByText } = render(
    <Router>
      <PlacePage id={first.id} completed={completed} />
    </Router>
  );
  first.interactions.forEach((interaction) => {
    getByText(interaction.text);
  });
});

test("Locked interactions render with locked class", () => {
  const { getByText, container } = render(
    <Router>
      <PlacePage id={first.id} completed={completed} />
    </Router>
  );

  const interactions = container.querySelectorAll(".interaction-circle");

  interactions.forEach((button, index) => {
    const { has, max } = countStarsInPlace(0, completed);
    if (has < first.interactions[index].requiredStars) {
      expect(button.className).toMatch("locked");
    } else {
      expect(button.className).toMatch("unlocked");
    }
  });
});
