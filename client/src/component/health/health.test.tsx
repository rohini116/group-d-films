import { render, screen } from "@testing-library/react";
import Health from "./health";

test("Given the Health, When the component is rendered, Then the element should be present", () => {
  render(<Health />);
  const element = screen.getByTestId(/health/i);
  expect(element).toBeInTheDocument();
});
