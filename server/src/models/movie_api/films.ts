import { Film } from "../../types/films.types";
import { getMovieData } from "./requests";

export async function getTrendingFilms(forCurrentDay = true) {
    return getMovieData("/trending/movie/" + (forCurrentDay ? "day" : "week"),
        'results', 'Trending films');
}

export async function getTopRatedFilms() {
	return getMovieData("/movie/top_rated", 'results', 'Top rated films');
}

export async function getFilm(movieID : string) : Promise<Film | string> {
    return getMovieData("/movie/" + movieID, 'overview', 'film');
}