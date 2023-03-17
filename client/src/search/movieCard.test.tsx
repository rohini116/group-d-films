import { render, screen } from "@testing-library/react";
import MovieCard from "./movieCard";
import { Movie } from "../type/movie.types";

test("Given the required params, When the component is rendered, Then the text should be present", () => {
  const movie: Movie = {
    title: "testTitle",
    release_date: "testDate",
    poster_path: "testPath",
  };

  render(<MovieCard movie={movie} />);
  const text = screen.getByText(/testTitle/i);
  expect(text).toBeInTheDocument();
});
