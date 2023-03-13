import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./nav";
import user from "@testing-library/user-event";

test("Given the Nav, When the component is rendered, Then the text should be present", () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const homeText = screen.getByText(/Home/i);
  const moviesText = screen.getByText(/Movies/i);
  const aboutText = screen.getByText(/About/i);
  expect(homeText).toBeInTheDocument();
  expect(moviesText).toBeInTheDocument();
  expect(aboutText).toBeInTheDocument();
});

test("Given the Nav, When the '+' is clicked, Then the '-' should be present", async () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const plus = screen.getByText("+");
  await user.click(plus);
  const minus = screen.getByText("-");
  expect(minus).toBeInTheDocument();
});
