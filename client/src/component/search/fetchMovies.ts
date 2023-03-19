import { Movie } from "../../type/movie.types";

export const fetchMovies = async (url: string, number?: number) => {

  let res: Movie[] = [];
  try {

    const response = await fetch(url);
    const json = await response.json();

  
    if (number) {

      res = json.results.slice(0, number);

    } else {
      res = json.results;
    }
  } catch (e) {
    console.error(e);
  } finally {
    return res;
  }
};
