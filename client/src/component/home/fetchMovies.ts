import { Movie } from "../../type/movie.types";

export const fetchMovies = async (url: string, number: number) => {
  let res: Movie[] = [];
  try {
    const response = await fetch(url);
    const json = await response.json();
    res = json.results.slice(0, number);
  } catch (e) {
    console.error(e);
  } finally {
    return res;
  }
};
