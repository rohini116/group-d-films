import { render, screen } from "@testing-library/react";
import HomeBg from "./homeBg";

test("Given the HomeBg, When the component is rendered, Then the element should be present", () => {
  render(<HomeBg />);
  const homeBg = screen.getByTestId("home-bg");
  expect(homeBg).toBeInTheDocument();
});
