import { render, screen } from "@testing-library/react";
import MovieList from "./movieList";
import { MovieListProps } from "./movieList";

test("Given the required params, When the component is rendered, Then the element should be present", () => {
  const movieListProps: MovieListProps = {
    listTitle: "testTitle",
    url: "testUrl",
    number: 1,
  };

  render(<MovieList {...movieListProps} />);
  const element = screen.getByTestId("movieList");
  expect(element).toBeInTheDocument();
});
