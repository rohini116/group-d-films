import { Request, Response } from "express";
import  * as reviewService  from '../services/review'
import { handleJsonResponse } from "./controller_utils";

export async function getAll(req: Request, res: Response) {
    const filmId = req.params.filmId;  
    const page = req.query.page as string;   
    const result = await reviewService.getReviewsForFilm(filmId, page);
    handleJsonResponse(req, res, result);
}