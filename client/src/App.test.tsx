import { render, screen } from "@testing-library/react";
import App from "./App";

test("Given the App, When the component is rendered, Then the text should be present", () => {
  render(<App />);
  const text = screen.getByText(/Now Trending/i);
  expect(text).toBeInTheDocument();
});
