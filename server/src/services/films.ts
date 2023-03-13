import * as filmModel from '../models/movie_api/films';

export async function getTrendingFilms(forCurrentDay = true) {
    return await filmModel.getTrendingFilms(forCurrentDay);
}

export async function getTopRatedFilms() {
	return await filmModel.getTopRatedFilms();
}

export async function getFilm(id : string) {
	return await filmModel.getFilm(id);
}

