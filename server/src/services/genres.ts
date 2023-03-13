import * as genreModel from '../models/movie_api/genres';
import { GenreList } from '../types/films.types';

export async function getGenres() : Promise<GenreList | string> {
    return genreModel.getGenres();
}