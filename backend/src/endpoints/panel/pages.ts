import { sRequest } from "../../declarations/sessions";
import { Response } from "express";
import { panelPages } from '../../declarations/panel';
import { userRow } from "../../declarations/mysql";
import pool from "../../managers/database";

export default {
    methods: ["get"],
    get: async (req: sRequest, res: Response) => {
        if (!req.session.user) return res.status(401).send("Unauthorized");

        const user = (await pool.query<userRow[]>("SELECT role FROM users WHERE id = ?", [req.session.user]))[0];
        let allowedRoles = <string[]>["Helper", "Moderator", "Admin", "Owner"];
        if (user.length !== 1 || !allowedRoles.includes(user[0].role)) return res.status(401).send("Unauthorized");

        try {
            const pages: panelPages[] = [{
                name: "Console",
                icon: "faTerminal",
                roles: <string[]>["Owner"]
            }, {
                name: "Pack Editor",
                icon: "faStore",
                roles: <string[]>["Owner"]
            }, {
                name: "Item Editor",
                icon: "faSuitcase",
                roles: <string[]>["Owner"]
            }, {
                name: "Badge Editor",
                icon: "faAward",
                roles: <string[]>["Owner"]
            }, {
                name: "Banner Editor",
                icon: "faImages",
                roles: <string[]>["Owner"]
            }, {
                name: "News Editor",
                icon: "faNewspaper",
                roles: <string[]>["Owner", "Admin"]
            }, {
                name: "Emoji Editor",
                icon: "faSmile",
                roles: <string[]>["Owner", "Admin"]
            }, {
                name: "User Manager",
                icon: "faUserCog",
                roles: <string[]>["Owner", "Admin", "Moderator", "Helper"]
            }, {
                name: "Report Manager",
                icon: "faFlag",
                roles: <string[]>["Owner", "Admin", "Moderator", "Helper"]
            }];

            let accessablePages = pages
                .filter(page => page.roles?.includes(user[0].role))
                .map(({ name, icon }) => ({ name, icon }));
                
            return res.status(200).send(accessablePages);
        } catch (e) {
            console.error(e);
            return res.status(500).send("Interal Server Error");
        }
    }
}