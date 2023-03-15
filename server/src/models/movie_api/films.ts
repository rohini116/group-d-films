import { Film } from "../../types/films.types";
import { getMovieData } from "./requests";

export async function getTrendingFilms(forCurrentDay = true) {
console.log("### " + forCurrentDay);    
    return getMovieData("/trending/movie/"+ (forCurrentDay ? "day" : "week"), "",
        'results', 'Trending films');
}

export async function getTopRatedFilms() {
	return getMovieData("/movie/top_rated", "", 'results', 'Top rated films');
}

export async function getFilm(filmId : string) : Promise<Film | string> {
    return getMovieData("/movie/" + filmId, '', 'overview', 'film');
}

export async function getFilmsByGenre(genreIds : string, page : string) : Promise<Film[] | string> {
    const url = "/discover/movie";
	return getMovieData(url, "with_genres=" + encodeURIComponent(genreIds) + "&page=" + page, 'page', 'film');
}