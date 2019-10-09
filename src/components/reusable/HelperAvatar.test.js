import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HelperAvatar from "./HelperAvatar";

test("The helper component renders with the right text", () => {
  const { getByText } = render(<HelperAvatar speechText="Hi i'm a hippo" />);
  getByText("Hi i'm a hippo");
});
test("The image of the helper appears when there is no speech provided", () => {
  const { getByAltText } = render(<HelperAvatar />);
  getByAltText("helper-avatar");
});
test("The helper component shows the hintText when clicked", () => {
  const { getByAltText, getByText } = render(
    <HelperAvatar hintText="Look again, are they smiling?" />
  );
  const avatar = getByAltText("helper-avatar");
  fireEvent.click(avatar);
  getByText("Look again, are they smiling");
});
