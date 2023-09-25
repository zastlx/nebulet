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
        const user = (yield database_1.default.query("SELECT role FROM users WHERE id = ?", [req.session.user]))[0];
        let allowedRoles = ["Helper", "Moderator", "Admin", "Owner"];
        if (user.length !== 1 || !allowedRoles.includes(user[0].role))
            return res.status(401).send("Unauthorized");
        try {
            const pages = [{
                    name: "Console",
                    icon: "faTerminal",
                    roles: ["Owner"]
                }, {
                    name: "Pack Editor",
                    icon: "faStore",
                    roles: ["Owner"]
                }, {
                    name: "Item Editor",
                    icon: "faSuitcase",
                    roles: ["Owner"]
                }, {
                    name: "Badge Editor",
                    icon: "faAward",
                    roles: ["Owner"]
                }, {
                    name: "Banner Editor",
                    icon: "faImages",
                    roles: ["Owner"]
                }, {
                    name: "News Editor",
                    icon: "faNewspaper",
                    roles: ["Owner", "Admin"]
                }, {
                    name: "Emoji Editor",
                    icon: "faSmile",
                    roles: ["Owner", "Admin"]
                }, {
                    name: "User Manager",
                    icon: "faUserCog",
                    roles: ["Owner", "Admin", "Moderator", "Helper"]
                }, {
                    name: "Report Manager",
                    icon: "faFlag",
                    roles: ["Owner", "Admin", "Moderator", "Helper"]
                }];
            let accessablePages = pages
                .filter(page => { var _a; return (_a = page.roles) === null || _a === void 0 ? void 0 : _a.includes(user[0].role); })
                .map(({ name, icon }) => ({ name, icon }));
            return res.status(200).send(accessablePages);
        }
        catch (e) {
            console.error(e);
            return res.status(500).send("Interal Server Error");
        }
    })
};
