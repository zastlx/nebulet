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
            if (req.session.user) return res.status(400).send("You are already logged in.");

            const { password, username } = req.body;

            if (!username || !password) return res.status(400).send("Username and password are required.");
            if (typeof username !== "string" || typeof password !== "string") return res.send(400).send("Username and password must be strings.");
            if (/[^-\]_.a-zA-Z0-9]/.test(username)) return res.status(400).send("Username cannot contain special charaters.");
            if (username.length > 16 || username.length < 3) return res.status(400).send("Usernames must be between 3 and 16 characters long.");
            if (password.length < 6) return res.status(400).send("Password must be at least 6 characters long.");
            if (username === password) return res.status(400).send("Username and password cannot be the same.");

            const result = (await pool.query<UserRow[]>("SELECT id, password, ip FROM users WHERE username = ?", [username]))[0];

            if (result.length < 1) return res.status(400).send("There is no account with that username.");
            if (!(await bcrypt.compare(password, result[0].password))) return res.status(400).send("Incorrect password.");

            const hashedIp = md5.hash(req.ip);
            if (hashedIp !== result[0].ip) pool.query("UPDATE users SET ip = ? WHERE id = ?", [hashedIp, result[0].id]);

            req.session.user = result[0].id;
            return res.status(200).send({
                token: req.session.id
            });
        } catch (err) {
            console.error("Error fetching users:", err);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    }
}