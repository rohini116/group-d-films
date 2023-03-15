import * as configModel from '../models/movie_api/config';
import { MovieAPIConfig } from "../types/films.types";

export async function getMovieApiConfig() : Promise<MovieAPIConfig | string> {
    const config = await configModel.getMovieApiConfig();
    return config;
}