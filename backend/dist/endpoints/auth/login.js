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
exports.default = {
    methods: ["post"],
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (req.session.user)
                return res.status(400).send("You are already logged in.");
            const { password, username } = req.body;
            if (!username || !password)
                return res.status(400).send("Username and password are required.");
            if (typeof username !== "string" || typeof password !== "string")
                return res.send(400).send("Username and password must be strings.");
            if (/[^-\]_.a-zA-Z0-9]/.test(username))
                return res.status(400).send("Username cannot contain special charaters.");
            if (username.length > 16 || username.length < 3)
                return res.status(400).send("Usernames must be between 3 and 16 characters long.");
            if (password.length < 6)
                return res.status(400).send("Password must be at least 6 characters long.");
            if (username === password)
                return res.status(400).send("Username and password cannot be the same.");
            const result = (yield database_1.default.query("SELECT id, password, ip FROM users WHERE username = ?", [username]))[0];
            if (result.length < 1)
                return res.status(400).send("There is no account with that username.");
            if (!(yield hashing_1.bcrypt.compare(password, result[0].password)))
                return res.status(400).send("Incorrect password.");
            const hashedIp = hashing_1.md5.hash(req.ip);
            if (hashedIp !== result[0].ip)
                database_1.default.query("UPDATE users SET ip = ? WHERE id = ?", [hashedIp, result[0].id]);
            req.session.user = result[0].id;
            return res.status(200).send({
                token: req.session.id
            });
        }
        catch (err) {
            console.error("Error fetching users:", err);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    })
};
