import * as express from "express";
import { Express } from "express";
import { LOG_SERVER_OUTPUT } from "../app";
import film from "./film";
import genre from "./genre";
import review from "./review";
import user from "./user";
import config from "./config";
import * as homeController from "../controllers/home_controller";

export const router = express.Router();

export function initialiseRoutes(app: Express) {
  addBaseRouter(app);
  addAPIRoutes(app);
}

function addBaseRouter(app: Express) {
  router.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET");
    if (LOG_SERVER_OUTPUT) console.log(`📨 ${req.url}`);
    next();
  });

  if (LOG_SERVER_OUTPUT) console.log("🏠❤️‍🩹  Adding home health check route...");
  router.get("/health", (req, res) => {
    res.status(200).send({ message: "👍 Okay! The server is responding! 🙌" });
  });

  router.get("/", homeController.getHomePage);

  if (LOG_SERVER_OUTPUT)
    console.log("🛠️  Applying base router to Express server...");
  app.use("/", router);
}

function addAPIRoutes(app: Express) {
  const apiRouter = express.Router();

  apiRouter.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
  });

  apiRouter.use("/user", user);
  apiRouter.use("/configuration", config);
  apiRouter.use("/film", film);
  apiRouter.use("/genre", genre);
  apiRouter.use("/review", review);

  app.use("/", apiRouter);
}
