import * as express from "express";
import { Express } from "express";

export const router = express.Router();

export function initialiseRoutes(app: Express, logServerOutput = true) {
    addBaseRouter(app, logServerOutput);
    addAPIRoutes(app, logServerOutput);
}

function addBaseRouter(app: Express, logServerOutput = true) {
    router.use((req, res, next) => {
		res.header("Access-Control-Allow-Methods", "GET");
		if(logServerOutput) console.log(`📨 ${req.url}`);
		next();
	});

    if(logServerOutput) console.log("🏠❤️‍🩹  Adding home health check route...");
    router.get("/", (req, res) => {
        res.status(200).send("👍 Okay! The server is responding! 🙌");
    });

    if(logServerOutput) console.log("🛠️  Applying base router to Express server...");
	app.use("/", router);
}

function addAPIRoutes(app: Express, showInfo = true) {
    const apiRouter = express.Router();

	apiRouter.use((req, res, next) => {
		// we'll use this router to return specifically JSON
		res.setHeader("Content-Type", "application/json");
		next();
	});
}