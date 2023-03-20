import * as filmModel from '../models/movie_api/films';
import { Film, FilmList } from '../types/films.types';

export async function getTrendingFilms(forCurrentDay = true, page : string)
	: Promise<FilmList | string> {
    return await filmModel.getTrendingFilms(forCurrentDay, page);
}

export async function getTopRatedFilms(page : string) 
	: Promise<FilmList | string> {
	return await filmModel.getTopRatedFilms(page);
}

export async function getFilm(id : string)
	: Promise<Film | string> {
	return await filmModel.getFilm(id);
}

export async function getFilmsByGenre(genreIds : string, page : string)
	: Promise<FilmList | string> {
	return await filmModel.getFilmsByGenre(genreIds, page);
}


