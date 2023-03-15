import { Request, Response } from "express";
import  * as configService  from '../services/config'
import { handleJsonResponse } from "./controller_utils";

export async function getMovieApiConfig(req: Request, res: Response) {
    const result = await configService.getMovieApiConfig();
    handleJsonResponse(req, res, result);
}