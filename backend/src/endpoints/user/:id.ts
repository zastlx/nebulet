import { Response } from "express"; 
import { sRequest } from "../../declarations/sessions";
import { userRow } from "../../declarations/mysql";
import pool from "../../managers/database";

export default {
    methods: ["get"],
    get: async (req: sRequest, res: Response) => {
        if (!req.session.user) return res.status(401).send("Unauthorized");

        const result = (await pool.query<userRow[]>("SELECT id, username, created, avatar, badges, banner, blooks, shards, role, color, exp, stats, punishments, quests FROM users WHERE id = ?", [req.params.id]))[0];
        if (result.length !== 1) return res.status(403).send("That user does not exist.");
        const { id, username, created, avatar, badges, banner, blooks, shards, role, color, exp, stats, punishments, quests } = result[0];

        const selfResult = (await pool.query<userRow[]>("SELECT perms FROM users WHERE id = ?", [req.session.user]))[0];
        if (!selfResult[0].perms.includes("view_moderations")) res.status(200).send({ id, username, created, avatar, badges, banner, blooks, shards, role, color, exp, stats, quests });
        else res.status(200).send({ id, username, created, avatar, badges, banner, blooks, shards, role, color, exp, stats, punishments, quests });
    }
};