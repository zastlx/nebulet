import {
    Response
} from "express"
import {
    sRequest
} from "../../declarations/sessions"
import pool from "../../managers/database"
import { UserRow } from "../../declarations/mysql"
import { bcrypt, md5 } from "../../utils/hashing"

export default {
    methods: ["post"],
    post: async (req: sRequest, res: Response) => {
        try {
            if (req.session.user) return res.status(400).send("Your already logged in.");

            const { password, username } = req.body;

            if (typeof username !== "string" || typeof password !== "string") return res.send(400).send("Username and password must be strings");
            if (!username || !password) return res.status(400).send("Username and password are required.");

            const result = (await pool.query<UserRow[]>('SELECT id, password, ip FROM users WHERE username = ?', [username]))[0];

            if (result.length < 1) return res.status(404).send("Their is no account with that username.");
            if (await bcrypt.compare(password, result[0].password)) return res.status(401).send("Incorrect password");

            const hashedIp = md5.hash(req.ip);
            if (hashedIp !== result[0].ip) pool.query("UPDATE users SET ip = ? WHERE id = ?", [hashedIp, result[0].id]);

            req.session.user = result[0].id;
            return res.status(200).send("Succesfully logged in.");
        } catch (err) {
            console.error('Error fetching users:', err);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }
}