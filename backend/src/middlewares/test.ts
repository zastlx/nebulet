import { Request, Response, NextFunction } from "express";
import config from "../config.js";

export default (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);

    next();
};