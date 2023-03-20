import { LOG_SERVER_OUTPUT } from '../../app';
import { buildUrl } from './request_utils';
import { MovieServerMessage } from './types';

/**
 * send a GET request to the movie API
 * @param url 
 * @param expectedFieldName - a field that should appear in the returned JSON data
 * @param expectedDatatype - type of data being returned, this is just shown in any error messages
 * @returns T or error message string
 */
export async function getMovieData<T>(url : string, params : string[], expectedFieldName : string,
    expectedDatatype : string) : Promise<T | string> {
    try {
        const fullUrl = buildUrl(url, params);
        if(LOG_SERVER_OUTPUT) console.log(fullUrl);
        const res = await fetch(fullUrl, { method: 'GET' });
        const json = await res.json();  
        if(res.ok && json?.[expectedFieldName]) {                            
            return json as T;
        }
        // if we didn't get the expected data back, look for an error message
        if(json?.["status_message"]) {
            const msg = json as MovieServerMessage;
            return msg.status_message;
        } 

        return "Unknown data format for: " + expectedDatatype;

    } catch (err) {
        console.log(err);
    }

    return "Error Loading: " + expectedDatatype;
}
