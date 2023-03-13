import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Logo from "./logo";

test("Given the Logo, When the component is rendered, Then the element should be present", () => {
  render(
    <BrowserRouter>
      <Logo />
    </BrowserRouter>
  );
  const logoImg = screen.getByTestId("logo-img");
  expect(logoImg).toBeInTheDocument();
});
