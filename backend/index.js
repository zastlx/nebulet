import express from "express";
/* eslint-disable */
import intercom from "./managers/intercom.js";
/* eslint-enable */
import setupRoutes from "./utils/initRoutes.js";
import config from "./config.js";
import setupMiddlewares from "./utils/initMiddlewares.js";

const app = express();
app.use(express.json());
app.set("trust proxy", 1);

setupMiddlewares(app).then(() => {
    setupRoutes(app).then(() => {
        app.listen(config.server.port, () => console.log(`Server started.`));
    })
});