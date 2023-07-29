import querystring from "querystring";
import {
    Request,
    Response
} from "express";
import config from "../../config";

export default {
    methods: ["get"],
    get: (req: Request, res: Response) => {
        const params = querystring.stringify({
            client_id: config.oauth.discord.cid,
            redirect_uri: "https://nebulet.zastix.club/api/discord/authcallback",
            response_type: "code",
            scope: "identify",
        });

        res.redirect(`https://discord.com/api/oauth2/authorize?${params}`);
    }
};