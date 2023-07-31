"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const querystring_1 = __importDefault(require("querystring"));
const axios_1 = __importDefault(require("axios"));
const config_js_1 = __importDefault(require("../../config.js"));
const intercom_js_1 = __importDefault(require("../../managers/intercom.js"));
exports.default = {
    methods: ["get"],
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { code } = req.query;
        if (!code)
            res.status(400).send("Missing authorization code.");
        const tokenResponse = yield axios_1.default.post("https://discord.com/api/oauth2/token", querystring_1.default.stringify({
            client_id: config_js_1.default.oauth.discord.cid,
            client_secret: config_js_1.default.oauth.discord.secret,
            grant_type: "authorization_code",
            code: `${code}`,
            redirect_uri: "https://nebulet.zastix.club/api/discord/authcallback",
            scope: "identify",
        })); // deaf coding!
        const { access_token: accessToken } = tokenResponse.data;
        const userResponse = yield axios_1.default.get("https://discord.com/api/users/@me", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        intercom_js_1.default.write(JSON.stringify({
            type: "discordOAuth",
            user: userResponse.data
        }) + "\n");
        res.redirect("/stats");
    })
};
