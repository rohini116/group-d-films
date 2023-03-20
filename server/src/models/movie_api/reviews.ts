import { Review_Results } from "../../types/films.types";
import { getMovieData } from "./requests";
import { getPageNumParam } from "./request_utils";

export async function getReviewsForFilm(filmId : string, page : string) 
    : Promise<Review_Results | string> {
        
    const url = `/movie/${filmId}/reviews`;
    const params = [];
    params.push(getPageNumParam(page));

	return getMovieData(url, params, 'results', 'review results');
}
