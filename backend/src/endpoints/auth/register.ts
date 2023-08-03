import {
    Response
} from "express";
import {
    sRequest
} from "../../declarations/sessions";
import pool from "../../managers/database";
import { bcrypt, md5 } from "../../utils/hashing";
import ids from "../../utils/ids";
import { resultCount } from "../../declarations/mysql";

export default {
    methods: ["post"],
    post: async (req: sRequest, res: Response) => {
        try {
            if (req.session.user) return res.status(400).send("Your already logged in.");
            const { password, username } = req.body;

            if (!username || !password) return res.status(400).send("Username and password are required.");
            if (typeof username !== "string" || typeof password !== "string") return res.status(400).send("Username and password must be strings.");
            if (username.length > 16 || username.length < 3) return res.status(400).send("Usernames must be between 3 and 16 characters long.");
            if (/[^-\]_.a-zA-Z0-9]/.test(username)) return res.status(400).send("Username cannot have any special charaters.");
            if (password.length < 6) return res.status(400).send("Password must be at least 6 characters long.");
            if (username === password) return res.status(400).send("Username and password cannot be the same.");

            const userCount = (await pool.query<resultCount[]>('SELECT COUNT(*) AS count FROM users WHERE username = ?', [username]))[0];

            if (userCount[0].count > 0) return res.status(409).send("Username is already taken.");

            const uId = ids.user();

            await pool.query(`INSERT INTO users (
                id,
                username,
                discord,
                password,
                avatar,
                badges,
                banner,
                blooks,
                shards,
                role,
                color,
                exp,
                stats,
                friends,
                achievements,
                blocks,
                ip,
                claimed,
                punishments,
                settings,
                perms,
                quests,
                expeditions,
                banners
            ) VALUES (
                ?,
                ?,
                '',
                ?,
                '/content/blooks/astronaut.png',
                '[]',
                '/content/banners/default.png',
                '{}',
                2500,
                'Wanderer',
                '#fff',
                150,
                '{"messagesSent":0,"completedTrades":0,"succesfulOffers":0,"expeditions":0}',
                '[]',
                '[]',
                '[]',
                ?,
                NULL,
                '[]',
                '{}',
                '[]',
                '[]',
                '[]',
                '[]'
            );`, [uId, username, (await bcrypt.hash(password)), md5.hash(req.ip)]);

            req.session.user = uId;

            return res.status(200).send({
                token: req.session.id
            });
        } catch (err) {
            console.error(err);
            return res.status(500).send("Internal Server Error");
        }
    }
}