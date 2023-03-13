import { LOG_SERVER_OUTPUT } from '../../app';
import { MovieServerMessage } from './types';

const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = process.env.MOVIE_API_KEY_NAME + '=' + process.env.MOVIE_API_KEY_VALUE;

function buildUrl(url : string) {
    if(url.startsWith('/') === false) {
        url = '/' + url;
    }
    return BASE_URL + url + "?" + API_KEY;
}

/**
 * send a GET request to the movie API
 * @param url 
 * @param expectedFieldName - a field that should appear in the returned JSON data
 * @param expectedDatatype - type of data being returned, this is just shown in any error messages
 * @returns T or error message string
 */
export async function getMovieData<T>(url : string, expectedFieldName : string,
    expectedDatatype : string) : Promise<T | string> {
    try {
        const fullUrl = buildUrl(url);
        if(LOG_SERVER_OUTPUT) console.log(fullUrl);
        const res = await fetch(fullUrl, { method: 'GET' });
        const json = await res.json();  
        if(res.ok && json?.[expectedFieldName]) {                            
            return json as T;
        }
        // if we didn't get the expected data back or it was not a success response,
        // look for an error message
        if(json?.["status_message"]) {
            const msg = <MovieServerMessage>JSON.parse(json);
            return msg.status_message;
        } 

        return "Unknown data format for: " + expectedDatatype;

    } catch (err) {
        console.log(err);
    }

    return "Error Loading: " + expectedDatatype;
}