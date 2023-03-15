import { Request, Response } from "express";
import  * as filmService  from '../services/films'
import { handleJsonResponse, sendSuccessMessageResponse } from "./controller_utils";

export async function getTrendingFilms(req: Request, res: Response) {   
    const forCurrentDay = req.params.day.toLowerCase() === 'day';  
    const result = await filmService.getTrendingFilms(forCurrentDay);
    handleJsonResponse(req, res, result);
}

export async function getTopRatedFilms(req: Request, res: Response) {  
	const result = await filmService.getTopRatedFilms();
    handleJsonResponse(req, res, result);
}

export async function getFilm(req: Request, res: Response) {
    const filmId = req.params.filmId;  
    const result = await filmService.getFilm(filmId);
    handleJsonResponse(req, res, result);
}

export async function getFilmsByGenre(req: Request, res: Response) {  
    const genreIDs = req.query.genre_ids as string;
    const page = req.query.page as string;   
	const result = await filmService.getFilmsByGenre(genreIDs, page);
    handleJsonResponse(req, res, result);
}