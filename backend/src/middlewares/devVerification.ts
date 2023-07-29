import { Request, Response, NextFunction } from "express";
import config from "../config.js";

export default (req: Request, res: Response, next: NextFunction) => {
    if (!config.security.allowedIps.includes(req.ip)) return res.send("me no hablo esplano");

    next();
};