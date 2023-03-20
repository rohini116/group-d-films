import { MOVIE_API_KEY_NAME, MOVIE_API_KEY_VALUE } from '../../configs/credentials';

export const BASE_URL = "https://api.themoviedb.org/3";

export const API_KEY = MOVIE_API_KEY_NAME + '=' + MOVIE_API_KEY_VALUE;

/**
 * build a movie API url with optional params
 * @param url 
 * @param params 
 * @returns 
 */
export function buildUrl(url : string, params : string[]) {
    if(url.startsWith('/') === false) {
        url = '/' + url;
    }
    const paramList = params.length > 0 ? params.join("&") : "";

    return BASE_URL 
        + url
        + "?" + API_KEY
        + (paramList.length > 0 ? "&" + paramList : "");
}

/**
 * convert a page number to a param string eg "page=2"
 * if no page number return an empty string
 * @param page 
 * @param minPage 
 * @param maxPage 
 * @returns 
 */
export function getPageNumParam(page : string, minPage = 1, maxPage = 1000) : string {
    if(page === undefined || page.trim().length === 0) {
        return "";
    }
    let num = parseInt(page);
    if(isNaN(num)) {
        return "";
    }
    if(num < minPage || num > maxPage) {
        num = 1;
    }
    return "page=" + page;
}