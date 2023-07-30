import { Response } from "express"
import { sRequest } from "../../declarations/sessions"
import pool from "../../managers/database"

export default {
    methods: ["post"],
    post: async (req: sRequest, res: Response) => {
        const { username, password } = req.body;

        //const [result] = await pool.query("SELECT password, ip FROM users WHERE username = ?", [username]);
        
       // if (result.length < 1) res.send('test error'):
    }
}