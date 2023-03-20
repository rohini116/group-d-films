import * as reviewModel from '../models/movie_api/reviews';
import { Review_Results } from '../types/films.types';

export async function getReviewsForFilm(filmId : string, page : string) 
    : Promise<Review_Results | string>{
    return await reviewModel.getReviewsForFilm(filmId, page);
}
