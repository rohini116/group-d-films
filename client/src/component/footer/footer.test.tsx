import { render, screen } from "@testing-library/react";
import Footer from "./footer";

test("Given the Footer, When the component is rendered, Then the text should be present", () => {
  render(<Footer />);
  const text = screen.getByText(/@2023 Team-D/i);
  expect(text).toBeInTheDocument();
});
