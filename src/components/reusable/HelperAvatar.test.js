import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import HelperAvatar from "./HelperAvatar";
const helpText = "Look again, are they smiling?";
const speechText = "Hi i'm a hippo";
test("The helper component renders with the right text", () => {
  const { getByText } = render(<HelperAvatar speechText={speechText} />);
  getByText(speechText);
});
test("The image of the helper appears when there is no speech provided", () => {
  const { getByAltText } = render(<HelperAvatar />);
  getByAltText("helper-avatar");
});
test("The helper component shows the helpText when clicked", async () => {
  const { getByAltText, getByText } = render(
    <HelperAvatar helpText={helpText} />
  );
  const avatar = getByAltText("helper-avatar");
  fireEvent.click(avatar);
  getByText(helpText);
});
test("When both speechText and helpText are passed in , the helper component replaces the speechText with the helpText when clicked", () => {
  const { getByAltText, getByText } = render(
    <HelperAvatar helpText={helpText} speechText={speechText} />
  );
  const avatar = getByAltText("helper-avatar");
  getByText(speechText);
  //expect speechText to be displayed and helpText to not be displayed on initial render;
  expect(() => getByText(helpText)).toThrow();
  fireEvent.click(avatar);
  //expect speechText to disappear and helpText to be displayed after clicking
  expect(() => getByText(speechText)).toThrow();
  getByText(helpText);
});
test(`when both speechText and helpText are passed in,
the helper component replaces the speechText with the helpText when clicked, 
and keeps the helpText visible when clicked again.`, () => {
  const { getByAltText, getByText } = render(
    <HelperAvatar helpText={helpText} speechText={speechText} />
  );
  const avatar = getByAltText("helper-avatar");
  getByText(speechText);
  //expect speechText to be displayed and helpText to not be displayed on initial render;
  expect(() => getByText(helpText)).toThrow();
  fireEvent.click(avatar);
  //expect speechText to disappear and helpText to be displayed after clicking
  expect(() => getByText(speechText)).toThrow();
  getByText(helpText);
  fireEvent.click(avatar);
  //expect helpText to stay, and speechText to not reappear on subsequent clicks
  expect(() => getByText(speechText)).toThrow();
  getByText(helpText);
});
jest.useFakeTimers();

test("speechText disappears after timeOut", () => {
  const { getByText } = render(
    <HelperAvatar helpText={helpText} speechText={speechText} timeOut={1000} />
  );
  getByText(speechText);
  act(() => {
    jest.advanceTimersByTime(500); //halfway through timer, speechText should still be visible
  });
  getByText(speechText);
  act(() => {
    jest.advanceTimersByTime(500); //timer completed, speechText should disappear
  });
  expect(() => getByText(speechText)).toThrow();
});

test("helpText disappears after timeOut expires", () => {
  const { getByAltText, getByText } = render(
    <HelperAvatar helpText={helpText} speechText={speechText} timeOut={1000} />
  );
  const avatar = getByAltText("helper-avatar");
  getByText(speechText);
  fireEvent.click(avatar);
  getByText(helpText);
  act(() => {
    jest.advanceTimersByTime(500); //halfway through timer, helpText should still be visible
  });
  getByText(helpText);
  act(() => {
    jest.advanceTimersByTime(500); //timer completed, helpText should disappear
  });
  expect(() => getByText(helpText)).toThrow();
});
