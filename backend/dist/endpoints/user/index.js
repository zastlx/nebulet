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
    methods: ["get", "post"],
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.session.user)
            return res.status(401).send("Unauthorized");
        const result = (yield database_1.default.query("SELECT id, username, discord, created, avatar, badges, banner, blooks, shards, role, color, exp, stats, friends, achievements, blocks, claimed, punishments, settings, quests, perms, expeditions FROM users WHERE id = ?", [req.session.user]))[0];
        // this should never happen but just in case
        if (result.length !== 1) {
            delete req.session.user;
            return res.status(401);
        }
        res.status(200).send(result[0]);
    }),
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!req.session.user)
                return res.status(401).send("Unauthorized");
            const newProps = req.body;
            if (!newProps || Object.keys(newProps).length < 1)
                return res.status(400).send("Invalid body");
            if (!Object.keys(newProps).every((key) => [
                "avatarBlook"
            ].includes(key)))
                return res.status(400).send("Invalid body keys");
            if (newProps["avatarBlook"]) {
                const blookResult = (yield database_1.default.query("SELECT * FROM blooks WHERE name = ?", [newProps["avatarBlook"]]))[0];
                if (blookResult.length !== 1)
                    return res.status(400).send("That blook doesnt exist.");
                const user = (yield database_1.default.query("SELECT blooks FROM users WHERE id = ?", [req.session.user]))[0];
                if (user.length !== 1) {
                    delete req.session.user;
                    return res.status(401).send("Unauthorized");
                }
                if ((!user[0].blooks[newProps["avatarBlook"]] || user[0].blooks[newProps["avatarBlook"]] < 1) && newProps["avatarBlook"] !== "astronaut")
                    res.status(403).send("You dont own that blook.");
                yield database_1.default.query("UPDATE users SET avatar = ? WHERE id = ?", [blookResult[0].image, req.session.user]);
                return res.status(200).send({
                    avatar: blookResult[0].image
                });
            }
        }
        catch (e) {
            console.error(e);
            res.status(500).send("Interal Server Error");
        }
    })
};
