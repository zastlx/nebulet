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
            const { password, username } = req.body;

            if (!username || !password) return res.status(400).send("Username and password are required.");
            if (typeof username !== "string" || typeof password !== "string") return res.status(400).send("Username and password must be strings");
            if (username.length > 24) return res.status(400).send("Username must be 24 chars or less");
            if (username.length < 2) return res.status(400).send("Username must be atleast 2 chars long");
            if (/[^-\]_.a-zA-Z0-9]/.test(username)) return res.status(400).send("Username can not have any special charaters");
            if (password.length < 10) return res.status(400).send("Password must be atleast 10 chars long");

            const userCount = (await pool.query<resultCount[]>('SELECT COUNT(*) AS count FROM users WHERE username = ?', [username]))[0];

            if (userCount[0].count > 0) res.status(409).send("Username is already taken");

            const uId = ids.user();

            pool.query(`INSERT INTO users (
                Primary,
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
                settings
            ) VALUES (
                ?,
                ?,
                '',
                ?,
                '/content/blooks/Astronaut.png',
                '{}',
                '/content/banners/default.png',
                '{}',
                2500,
                'Wanderer',
                '#fff',
                0,
                '{"uniqueBlooks":0,"messagesSent":0,"completedTrades":0,"succesfulOffers":0,"expeditions":0}',
                '[]',
                '[]',
                '[]',
                ?,
                NULL,
                '[]',
                '{}'
            );`, [uId, username, (await bcrypt.hash(password)), md5.hash(req.ip)])

            
        } catch (err) {
            console.error(err);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }
}