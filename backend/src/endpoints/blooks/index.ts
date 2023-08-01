import { sRequest } from "../../declarations/sessions";
import { Response } from "express";
import pool from "../../managers/database";
import { blookRow } from "../../declarations/mysql";

export default {
    methods: ["get"],
    get: async (req: sRequest, res: Response) => {
        if (!req.session.user) return res.status(401).send("Unauthorized");
        try {
            const blooks = (await pool.query<blookRow[]>("SELECT * FROM blooks"))[0];
            return res.status(200).send(blooks);
        } catch (e) {
            console.error(e);
            
            return res.status(500).send("Interal Server Error");
        }
    }
}