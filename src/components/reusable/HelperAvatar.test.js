import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import HelperAvatar from "./HelperAvatar";
const helpText = "Look again, are they smiling?";
const speechText = "Hi i'm a hippo";
test("The helper component renders with the right text", () => {
  const { getByText } = render(<HelperAvatar speechText={speechText} />);
  getByText("Hi i'm a hippo");
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
  getByText("Look again, are they smiling?");
});
