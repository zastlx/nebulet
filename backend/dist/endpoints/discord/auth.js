"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const querystring_1 = __importDefault(require("querystring"));
const config_1 = __importDefault(require("../../config"));
exports.default = {
    methods: ["get"],
    get: (req, res) => {
        const params = querystring_1.default.stringify({
            client_id: config_1.default.oauth.discord.cid,
            redirect_uri: "https://nebulet.zastix.club/api/discord/authcallback",
            response_type: "code",
            scope: "identify",
        });
        res.redirect(`https://discord.com/api/oauth2/authorize?${params}`);
    }
};
