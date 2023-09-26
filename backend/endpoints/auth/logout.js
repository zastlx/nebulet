export default {
    methods: ["post"],
    post: async (req, res) => {
        try {
            if (!req.session.user) return res.status(401).send("Unauthorized")

            delete req.session.user;
            return res.sendStatus(200);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    }
}