import { MovieAPIConfig } from "../../types/films.types";
import { getMovieData } from "./requests";

export async function getMovieApiConfig() : Promise<MovieAPIConfig | string> {
    const url = "/configuration";
    return getMovieData<MovieAPIConfig>(url, [], 'images', 'configuration');
}