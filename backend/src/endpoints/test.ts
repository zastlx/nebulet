import { Response } from "express"; 
import { sRequest } from "../declarations/sessions";

export default {
    methods: ["get"],
    get: (req: sRequest, res: Response) => {
        req.session.test = "NIGER?";
        res.send(req.session);
    }
};