import pool from "../../managers/database.js";

export default {
    methods: ["get"],
    get: async (req, res) => {
        if (!req.session.user) return res.status(401).send("Unauthorized");

        const shards = (await pool.query(`SELECT id, username, avatar, badges, banner, blooks, shards, role, color, exp, stats, banners FROM users ORDER BY shards DESC LIMIT 10`))[0];
        const exp = (await pool.query(`SELECT id, username, avatar, badges, banner, blooks, shards, role, color, exp, stats, banners FROM users ORDER BY exp DESC LIMIT 10`))[0];
        const uni = (await pool.query(`SELECT id, username, avatar, badges, banner, blooks, shards, role, color, exp, stats, banners FROM users ORDER BY JSON_EXTRACT(stats, '$.messagesSent') DESC LIMIT 10`))[0];
        const messages = (await pool.query(`SELECT id, username, avatar, badges, banner, blooks, shards, role, color, exp, stats, banners, JSON_LENGTH(blooks) AS bc FROM users ORDER BY bc DESC LIMIT 10`))[0];

        res.status(200).send({
            shards, exp, uni, messages
        });
    }
};