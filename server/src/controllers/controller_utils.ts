import { Request, Response } from "express";

/**
 * handle returning data as a JSON response unless the data is an error string
 * in which case packages the error string in a JSON message object
 * @param req 
 * @param res 
 * @param data either a JSON object to return to the client as a success response
 *             or an error string
 */
export async function handleJsonResponse<T>(req: Request, res: Response,
    data : T | string, successCode = 200, errorCode = 400) {
    if(typeof data === 'string') {
        res.status(errorCode).json({ success : false, message : data });
    } else {
        res.status(successCode).json(data);
    }
}