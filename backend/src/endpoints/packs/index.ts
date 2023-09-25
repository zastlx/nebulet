import { sRequest } from "../../declarations/sessions";
import { Response } from "express";
import pool from "../../managers/database";
import { packRow } from "../../declarations/mysql";

export default {
    methods: ["get"],
    get: async (req: sRequest, res: Response) => {
        if (!req.session.user) return res.status(401).send("Unauthorized");
        try {
            let packs = (await pool.query<packRow[]>("SELECT * FROM packs"))[0];
            packs.map(a => a.blooks = JSON.parse(a.blooks));
            return res.status(200).send(packs);
        } catch (e) {
            console.error(e);
            
            return res.status(500).send("Interal Server Error");
        }
    }
}