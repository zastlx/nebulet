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
        const result = (yield database_1.default.query("SELECT id, username, created, avatar, badges, banner, blooks, shards, role, color, exp, stats, punishments, quests FROM users WHERE id = ?", [req.params.id]))[0];
        if (result.length !== 1)
            return res.status(403).send("That user does not exist.");
        const { id, username, created, avatar, badges, banner, blooks, shards, role, color, exp, stats, punishments, quests } = result[0];
        const selfResult = (yield database_1.default.query("SELECT perms FROM users WHERE id = ?", [req.session.user]))[0];
        if (!selfResult[0].perms.includes("view_moderations"))
            res.status(200).send({ id, username, created, avatar, badges, banner, blooks, shards, role, color, exp, stats, quests });
        else
            res.status(200).send({ id, username, created, avatar, badges, banner, blooks, shards, role, color, exp, stats, punishments, quests });
    })
};
