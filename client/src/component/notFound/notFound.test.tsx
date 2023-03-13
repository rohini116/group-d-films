import { render, screen } from "@testing-library/react";
import NotFound from "./notFound";

test("Given the NotFound, When the component is rendered, Then the text should be present", () => {
  render(<NotFound />);
  const text = screen.getByText(/not found/i);
  expect(text).toBeInTheDocument();
});
