import pool from "../../managers/database.js";

export default {
    methods: ["get"],
    get: async (req, res) => {
        if (!req.session.user) return res.status(401).send("Unauthorized");

        const user = (await pool.query("SELECT role FROM users WHERE id = ?", [req.session.user]))[0];
        let allowedRoles = ["Helper", "Moderator", "Admin", "Owner"];
        if (user.length !== 1 || !allowedRoles.includes(user[0].role)) return res.status(401).send("Unauthorized");

        try {
            const pages = [{
                name: "Console",
                icon: "faTerminal",
                roles: ["Owner"],
                link: "/console"
            }, {
                name: "Pack Editor",
                icon: "faStore",
                roles: ["Owner"],
                link: "/packs"
            }, {
                name: "Item Editor",
                icon: "faSuitcase",
                roles: ["Owner"],
                link: "/items"
            }, {
                name: "Badge Editor",
                icon: "faAward",
                roles: ["Owner"],
                link: "/badges"
            }, {
                name: "Banner Editor",
                icon: "faImages",
                roles: ["Owner"],
                link: "/banners"
            }, {
                name: "News Editor",
                icon: "faNewspaper",
                roles: ["Owner", "Admin"],
                link: "/news"
            }, {
                name: "Emoji Editor",
                icon: "faSmile",
                roles: ["Owner", "Admin"],
                link: "/emojis"
            }, {
                name: "User Manager",
                icon: "faUserCog",
                roles: ["Owner", "Admin", "Moderator", "Helper"],
                link: "/users"
            }, {
                name: "Report Manager",
                icon: "faFlag",
                roles: ["Owner", "Admin", "Moderator", "Helper"],
                link: "/reports"
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