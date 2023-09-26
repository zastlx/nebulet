// import pool from "../../managers/database.js";

export default {
    methods: ["post"],
    post: async (req, res) => {
        if (!req.session.user) return res.status(401).send("Unauthorized");
        try {
            return res.status(200).send({
                item: "Astronaut",
                new: false
            });
        } catch (e) {
            console.error(e);
            
            return res.status(500).send("Interal Server Error");
        }
    }
}