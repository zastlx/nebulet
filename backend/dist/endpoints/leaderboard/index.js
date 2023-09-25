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
exports.default = {
    methods: ["get"],
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.session.user)
            return res.status(401).send("Unauthorized");
        const tokens = (yield database_1.default.query(`SELECT id, username, avatar, badges, banner, blooks, shards, role, color, exp, stats, banners FROM users ORDER BY shards DESC LIMIT 10`))[0];
        const exp = (yield database_1.default.query(`SELECT id, username, avatar, badges, banner, blooks, shards, role, color, exp, stats, banners FROM users ORDER BY exp DESC LIMIT 10`))[0];
        const uni = (yield database_1.default.query(`SELECT id, username, avatar, badges, banner, blooks, shards, role, color, exp, stats, banners FROM users ORDER BY JSON_EXTRACT(stats, '$.messagesSent') DESC LIMIT 10`))[0];
        const messages = (yield database_1.default.query(`SELECT id, username, avatar, badges, banner, blooks, shards, role, color, exp, stats, banners, JSON_LENGTH(blooks) AS bc FROM users ORDER BY bc DESC LIMIT 10`))[0];
        res.status(200).send({
            tokens, exp, uni, messages
        });
    })
};
