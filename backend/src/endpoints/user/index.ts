import { Response } from "express"; 
import { sRequest } from "../../declarations/sessions";
import { UserRow } from "../../declarations/mysql";
import pool from "../../managers/database";

export default {
    methods: ["get"],
    get: async (req: sRequest, res: Response) => {
        if (!req.session.user) return res.status(401).send("Unauthorized");

        const result = (await pool.query<UserRow[]>("SELECT id, username, discord, created, avatar, badges, banner, blooks, shards, role, color, exp, stats, friends, achievements, blocks, claimed, punishments, settings, quests, perms, expeditions FROM users WHERE id = ?", [req.session.user]))[0];

        // this should never happen but just in case
        if (result.length !== 1) {
            delete req.session.user;
            return res.status(401);
        }

        res.status(200).send(result[0]);
    }
};