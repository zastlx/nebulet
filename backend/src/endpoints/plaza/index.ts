import { sRequest } from "../../declarations/sessions";
import { Response } from "express";
import pool from "../../managers/database";
import { plazaRow } from "../../declarations/mysql";

export default {
    methods: ["get"],
    get: async (req: sRequest, res: Response) => {
        if (!req.session.user) return res.status(401).send("Unauthorized");
        try {
            const packs = (await pool.query<plazaRow[]>("SELECT * FROM packs"))[0];
            return res.status(200).send(packs);
        } catch (e) {
            console.error(e);
            return res.status(500).send("Interal Server Error");
        }
    }
}