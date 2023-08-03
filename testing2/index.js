import express from "express";
import setupRoutes from "./utils/route.js";

const app = express()

setupRoutes(app);
app.listen(1353, () => console.log('1353 poiotr'))