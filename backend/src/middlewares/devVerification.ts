import { Request, Response, NextFunction } from "express";
import config from "../config";

export default (req: Request, res: Response, next: NextFunction) => {
    if (!config.security.allowedIps.some(allowedIp => req.ip.startsWith(allowedIp))) return (Math.random() < 0.1 ? res.send("me no hablo esplano") : res.destroy());

    next();
};