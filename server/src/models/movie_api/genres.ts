import { GenreList } from "../../types/films.types";
import { getMovieData } from "./requests";

export async function getGenres() : Promise<GenreList | string> {
    const url = "/genre/movie/list";
    return getMovieData<GenreList>(url, "", 'genres', 'genres');
}