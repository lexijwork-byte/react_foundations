import { render, screen } from "@testing-library/react";
import Profile from "../src/components/main_profile";

test("renders with the correct title ", () => {
  // Setup - rendering the component on the page
  render(<Profile name="sarah" job="coach" birthdate="4th september" />);

  // Assert
  expect(screen.getByRole("heading")).toHaveTextContent("sarah");
});
