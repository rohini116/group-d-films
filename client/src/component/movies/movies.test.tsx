import { render, screen } from "@testing-library/react";
import Movies from "./movies";

test("Given the Movies, When the component is rendered, Then the text should be present", () => {
  render(<Movies />);
  const text = screen.getByText(/Movies/i);
  expect(text).toBeInTheDocument();
});
