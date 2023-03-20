import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./home";

test("Given the Home, When the component is rendered, Then the element should be present", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const home = screen.getByTestId("home");
  expect(home).toBeInTheDocument();
});
