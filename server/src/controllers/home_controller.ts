import { Request, Response } from "express";
import path from "path";

const template = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
        <title>Film Server Endpoints</title>
    </head>
    <body>
    <h1>Film Server</h1>
    Welcome to the Group D film server
    </body>
</html>`;

export async function getHomePage(req: Request, res: Response) {
    //res.status(200).send(template);
    res.sendFile(path.join(__dirname, '../../../client', 'index.html'));
}