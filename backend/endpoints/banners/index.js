import pool from "../../managers/database.js";

export default {
    methods: ["get"],
    get: async (req, res) => {
        if (!req.session.user) return res.status(401).send("Unauthorized");
        try {
            const banners = (await pool.query("SELECT * FROM banners"))[0];
            return res.status(200).send(banners);
        } catch (e) {
            console.error(e);
            return res.status(500).send("Interal Server Error");
        }
    }
}