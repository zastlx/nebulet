import { Request, Response } from "express";

export default {
    methods: ["get"],
    get: (req: Request, res: Response) => {
        res.send("NIGER");
    }
};