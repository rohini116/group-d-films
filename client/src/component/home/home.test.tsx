import { render, screen } from "@testing-library/react";
import Home from "./home";

test("Given the Home, When the component is rendered, Then the element should be present", () => {
  render(<Home />);
  const homeBg = screen.getByTestId("home-bg");
  expect(homeBg).toBeInTheDocument();
});
