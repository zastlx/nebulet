import { Response } from "express"
import { sRequest } from "../../declarations/sessions"

export default {
    methods: ["post"],
    post: async (req: sRequest, res: Response) => {
        try {
            if (!req.session.user) return res.status(401).send("Unauthorized");

            console.log(req.body);
            return res.status(200).send("Astronaut");
        } catch (err) {
            console.error(err);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    }
}