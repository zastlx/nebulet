import { sRequest } from "../../declarations/sessions";
import { Response } from "express";
import pool from "../../managers/database";
import { channelRow } from "../../declarations/mysql";

export default {
    methods: ["get"],
    get: async (req: sRequest, res: Response) => {
        if (!req.session.user) return res.status(401).send("Unauthorized");
        try {
            const channels = (await pool.query<channelRow[]>(`
                SELECT * FROM channels
                WHERE JSON_CONTAINS(recipients, '"*"', '$')
                OR JSON_CONTAINS(recipients, ? , '$');
            `, [req.session.user]))[0];

            return res.status(200).send(channels);
        } catch (e) {
            console.error(e);
            return res.status(500).send("Internal Server Error");
        }
    }
};
