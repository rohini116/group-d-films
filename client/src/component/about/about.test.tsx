import { render, screen } from "@testing-library/react";
import About from "./about";

test("Given the About, When the component is rendered, Then the text should be present", () => {
  render(<About />);
  const text = screen.getByText(/Group D Films Team Members/i);
  expect(text).toBeInTheDocument();
});
