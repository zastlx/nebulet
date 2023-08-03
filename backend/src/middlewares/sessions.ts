import { NextFunction, Request, Response } from "express";
import sessionsManager from "../managers/sessions";

export default (req: Request, res: Response, next: NextFunction) => {
    sessionsManager.middleWare.bind(sessionsManager)(req, res, next);
}