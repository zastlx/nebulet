import { Response } from "express"; 
import { sRequest } from "../../declarations/sessions";

export default {
    methods: ["get"],
    get: (req: sRequest, res: Response) => {
        console.log(req.params);
    }
};