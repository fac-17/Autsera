import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StartButton from "../components/StartButton";

test("startButton is rendered", () => {
  render(<StartButton />);
});

test("startButton calls the passed in onClick function", () => {
  const clickFunction = jest.fn();
  const { getByText } = render(<StartButton whenClicked={clickFunction} />);
  const startButton = getByText("START PLAYING!");
  fireEvent.click(startButton);
  expect(clickFunction).toHaveBeenCalledTimes(1);
});
