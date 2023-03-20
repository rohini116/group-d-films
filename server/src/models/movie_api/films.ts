import { Film, FilmList } from "../../types/films.types";
import { getMovieData } from "./requests";
import { getPageNumParam } from "./request_utils";

export async function getTrendingFilms(forCurrentDay = true, page : string)
    : Promise<FilmList | string> {

    const params = [];
    params.push(getPageNumParam(page));  
    return getMovieData("/trending/movie/"+ (forCurrentDay ? "day" : "week"), params,
        'results', 'Trending films');
}

export async function getTopRatedFilms(page : string)
    : Promise<FilmList | string> {

    const params = [];
    params.push(getPageNumParam(page));
	return getMovieData("/movie/top_rated", params, 'results', 'Top rated films');
}

export async function getFilm(filmId : string) 
    : Promise<Film | string> {

    return getMovieData("/movie/" + filmId, [], 'overview', 'film');
}

export async function getFilmsByGenre(genreIds : string, page : string) 
    : Promise<FilmList | string> {

    const url = "/discover/movie";
    const params = [];
    params.push("with_genres=" + encodeURIComponent(genreIds));
    params.push(getPageNumParam(page));

	return getMovieData(url, params, 'page', 'film');
}