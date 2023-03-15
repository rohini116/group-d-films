import { Review_Results } from "../../types/films.types";
import { getMovieData } from "./requests";

export async function getReviewsForFilm(filmId : string, page : string) : Promise<Review_Results[] | string> {
    const url = `/movie/${filmId}/reviews`;
    const pageParam = page !== undefined && page.length > 0 ? "page=" + page : "";
	return getMovieData(url, pageParam, 'results', 'review results');
}
