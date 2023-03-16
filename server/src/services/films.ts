import * as filmModel from '../models/movie_api/films';

export async function getTrendingFilms(forCurrentDay = true, page : string) {
    return await filmModel.getTrendingFilms(forCurrentDay, page);
}

export async function getTopRatedFilms(page : string) {
	return await filmModel.getTopRatedFilms(page);
}

export async function getFilm(id : string) {
	return await filmModel.getFilm(id);
}

export async function getFilmsByGenre(genreIds : string, page : string) {
	return await filmModel.getFilmsByGenre(genreIds, page);
}


