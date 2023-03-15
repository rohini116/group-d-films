import * as reviewModel from '../models/movie_api/reviews';

export async function getReviewsForFilm(filmId : string, page : string) {
    return await reviewModel.getReviewsForFilm(filmId, page);
}
