import pool from "../../managers/database.js";

export default {
    methods: ["get"],
    get: async (req, res) => {
        if (!req.session.user) return res.status(401).send("Unauthorized");
        try {
            const channels = (await pool.query(`
                SELECT * FROM channels
                WHERE JSON_CONTAINS(recipients, ?, '$')
                OR JSON_CONTAINS(recipients, '"*"', '$')
            `, ['"' + req.session.user + '"']))[0];

            return res.status(200).send(channels);
        } catch (e) {
            console.error(e);
            return res.status(500).send("Internal Server Error");
        }
    }
};
