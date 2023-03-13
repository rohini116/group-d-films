import { Request, Response } from "express";
import  * as genreService  from '../services/genres'
import { handleJsonResponse } from "./controller_utils";

export async function getGenres(req: Request, res: Response) {
    const result = await genreService.getGenres();
    handleJsonResponse(req, res, result);
}