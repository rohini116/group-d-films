import { render, screen } from "@testing-library/react";
import Health from "./health";

test("Given the Health, When the component is rendered, Then the text should be present", () => {
  render(<Health />);
  const text = screen.getByText(/Health/i);
  expect(text).toBeInTheDocument();
});
