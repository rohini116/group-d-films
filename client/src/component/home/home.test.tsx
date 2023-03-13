import { render, screen } from "@testing-library/react";
import Home from "./home";

test("Given the Home, When the component is rendered, Then the element should be present", () => {
  render(<Home />);
  const home = screen.getByTestId("home");
  expect(home).toBeInTheDocument();
});
