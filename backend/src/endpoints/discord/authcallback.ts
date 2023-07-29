import querystring from "querystring";
import {
    Request,
    Response
} from "express";
import axios from "axios";
import config from "../../config.js";
import intercom from "../../managers/intercom.js";

export default {
    methods: ["get"],
    get: async (req: Request, res: Response) => {
        const {
            code
        } = req.query;

        if (!code) {
            res.status(400).send("Missing authorization code.");
        }

        const tokenResponse = await axios.post("https://discord.com/api/oauth2/token", querystring.stringify({
            client_id: config.oauth.discord.cid,
            client_secret: config.oauth.discord.secret,
            grant_type: "authorization_code",
            code: `${code}`,
            redirect_uri: "https://nebulet.zastix.club/api/discord/authcallback",
            scope: "identify",
        }));

        const {
            access_token: accessToken
        } = tokenResponse.data;

        const userResponse = await axios.get("https://discord.com/api/users/@me", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        intercom.write(JSON.stringify({
            type: "discordOAuth",
            user: userResponse.data
        }) + "\n");

        res.redirect("/stats");
    }
};