import pool from "../../managers/database.js";

export default {
    methods: ["get"],
    get: async (req, res) => {
        if (!req.session.user) return res.status(401).send("Unauthorized");
        try {
            const blooks = (await pool.query("SELECT * FROM blooks"))[0];
            return res.status(200).send(blooks);
        } catch (e) {
            console.error(e);  
            return res.status(500).send("Interal Server Error");
        }
    }
}