import querystring from "querystring";
import config from "../../config.js";

export default {
    methods: ["get"],
    get: (req, res) => {
        const params = querystring.stringify({
            client_id: config.oauth.discord.cid,
            redirect_uri: "https://nebulet.zastix.club/api/discord/authcallback",
            response_type: "code",
            scope: "identify",
        });

        res.redirect(`https://discord.com/api/oauth2/authorize?${params}`);
    }
};