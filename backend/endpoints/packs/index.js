import pool from "../../managers/database.js";

export default {
    methods: ["get"],
    get: async (req, res) => {
        if (!req.session.user) return res.status(401).send("Unauthorized");
        try {
            let packs = (await pool.query("SELECT * FROM packs"))[0];
            packs.map(a => a.blooks = JSON.parse(a.blooks));
            return res.status(200).send(packs);
        } catch (e) {
            console.error(e);
            
            return res.status(500).send("Interal Server Error");
        }
    }
}