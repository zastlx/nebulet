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
const database_1 = __importDefault(require("../../managers/database"));
const hashing_1 = require("../../utils/hashing");
const ids_1 = __importDefault(require("../../utils/ids"));
const intercom_1 = __importDefault(require("../../managers/intercom"));
exports.default = {
    methods: ["post"],
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (req.session.user)
                return res.status(403).send("Your already logged in.");
            const { password, username } = req.body;
            if (!username || !password)
                return res.status(403).send("Username and password are required.");
            if (typeof username !== "string" || typeof password !== "string")
                return res.status(403).send("Username and password must be strings.");
            if (username.length > 16 || username.length < 3)
                return res.status(403).send("Usernames must be between 3 and 16 characters long.");
            if (/[^-\]_.a-zA-Z0-9]/.test(username))
                return res.status(403).send("Username cannot have any special charaters.");
            if (password.length < 6)
                return res.status(403).send("Password must be at least 6 characters long.");
            if (username === password)
                return res.status(403).send("Username and password cannot be the same.");
            const userCount = (yield database_1.default.query('SELECT COUNT(*) AS count FROM users WHERE username = ?', [username]))[0];
            if (userCount[0].count > 0)
                return res.status(409).send("Username is already taken.");
            const uId = ids_1.default.user();
            const hashedIp = hashing_1.md5.hash(req.ip);
            const userWithIp = (yield database_1.default.query("SELECT * FROM users WHERE ip = ?", [hashedIp]))[0];
            if (userWithIp.length) {
                intercom_1.default.write(JSON.stringify({
                    type: "altAccountAttempt",
                    user: userWithIp[0].username,
                    userId: userWithIp[0].id,
                    newUser: username
                }) + "\n");
                return res.status(403).send("You already have an account. Staff have been notified of the violation.");
            }
            yield database_1.default.query(`INSERT INTO users (
                id,
                username,
                discord,
                password,
                avatar,
                badges,
                banner,
                blooks,
                shards,
                role,
                color,
                exp,
                stats,
                friends,
                achievements,
                blocks,
                ip,
                claimed,
                punishments,
                settings,
                perms,
                quests,
                expeditions,
                banners
            ) VALUES (
                ?,
                ?,
                '',
                ?,
                '/content/blooks/astronaut.png',
                '[]',
                '/content/banners/default.png',
                '{}',
                2500,
                'Wanderer',
                '#fff',
                150,
                '{"messagesSent":0,"completedTrades":0,"succesfulOffers":0,"expeditions":0}',
                '[]',
                '[]',
                '[]',
                ?,
                NULL,
                '[]',
                '{}',
                '[]',
                '[]',
                '[]',
                '[]'
            );`, [uId, username, (yield hashing_1.bcrypt.hash(password)), hashedIp]);
            req.session.user = uId;
            return res.status(200).send({
                token: req.session.id
            });
        }
        catch (err) {
            console.error(err);
            return res.status(500).send("Internal Server Error");
        }
    })
};
