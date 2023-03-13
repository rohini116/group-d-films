import { Request, Response } from "express";

/**
 * todo: for now this returns a home page that lists the available server api endpoints
 * 
 */

const endPoints = [
    ["/", "This page"],
    ["/health", ""],
    ["/genre", ""],
    ["/film/trending/day", ""],
    ["/film/trending/week", ""],
    ["/film/top_rated", ""],
    ["/film/995133", "/film/{movieID}"]
];

const template = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
        <title>Film Server Endpoints</title>
    </head>
    <body>
    <h1>Film Server Endpoints (so far)</h1>
    ${getEndPointList()}
    </body>
</html>`;

function getEndPointList() {
    return endPoints.map(item => buildLink(item[0], item[1])).join("<br>");
}

function buildLink(url : string, text : string) {
    return `<a href="${url}">${url}</a>${text.length > 0 ? ' (' + text + ')' : ''}`;
}

export async function getHomePage(req: Request, res: Response) {
    res.status(200).send(template);
}