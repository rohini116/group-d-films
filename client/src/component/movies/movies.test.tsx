import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Movies from "./movies";

test("Given the Movies, When the component is rendered, Then the element should be present", () => {
  render(
    <BrowserRouter>
      <Movies />
    </BrowserRouter>
  );
  const element = screen.getByTestId("movies");
  expect(element).toBeInTheDocument();
});
