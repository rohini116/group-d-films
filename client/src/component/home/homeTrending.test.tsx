import { render, screen } from "@testing-library/react";
import HomeTrending from "./homeTrending";

test("Given the HomeTrending, When the component is rendered, Then the text should be present", () => {
  render(<HomeTrending />);
  const text = screen.getByText(/Now Trending/i);
  expect(text).toBeInTheDocument();
});
