import querystring from "querystring";
import {
    Response
} from "express";
import { sRequest } from "../../declarations/sessions";
import axios from "axios";
import config from "../../config";
import intercom from "../../managers/intercom";

export default {
    methods: ["get"],
    get: async (req: sRequest, res: Response) => {
        const {
            code
        } = req.query;

        if (!code) res.status(400).send("Missing authorization code.");

        const tokenResponse = await axios.post("https://discord.com/api/oauth2/token", querystring.stringify({
            client_id: config.oauth.discord.cid,
            client_secret: config.oauth.discord.secret,
            grant_type: "authorization_code",
            code: `${code}`,
            redirect_uri: "https://nebulet.zastix.club/api/discord/authcallback",
            scope: "identify",
        })); // deaf coding!

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