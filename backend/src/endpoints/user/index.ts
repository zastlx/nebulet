import { Response } from "express"; 
import { sRequest } from "../../declarations/sessions";
import { UserRow, blookRow } from "../../declarations/mysql";
import pool from "../../managers/database";

export default {
    methods: ["get", "post"],
    get: async (req: sRequest, res: Response) => {
        if (!req.session.user) return res.status(401).send("Unauthorized");

        const result = (await pool.query<UserRow[]>("SELECT id, username, discord, created, avatar, badges, banner, blooks, shards, role, color, exp, stats, friends, achievements, blocks, claimed, punishments, settings, quests, perms, expeditions FROM users WHERE id = ?", [req.session.user]))[0];

        // this should never happen but just in case
        if (result.length !== 1) {
            delete req.session.user;
            return res.status(401);
        }

        res.status(200).send(result[0]);
    },
    post: async (req: sRequest, res: Response) => {
        try {
            if (!req.session.user) return res.status(401).send("Unauthorized");
            const newProps = req.body;  
            if (!newProps || Object.keys(newProps).length < 1) return res.status(400).send("Invalid body");

            if (!Object.keys(newProps).every((key: string) => [
                "avatarBlook"
            ].includes(key))) return res.status(400).send("Invalid body keys");

            if (newProps["avatarBlook"]) {
                const blookResult = (await pool.query<blookRow[]>("SELECT * FROM blooks WHERE name = ?", [newProps["avatarBlook"]]))[0];
                if (blookResult.length !== 1) return res.status(400).send("That blook doesnt exist.");

                const user = (await pool.query<UserRow[]>("SELECT blooks FROM users WHERE id = ?", [req.session.user]))[0];
                if (user.length !== 1) {
                    delete req.session.user;
                    return res.status(401).send("Unauthorized");
                }

                if ((!user[0].blooks[newProps["avatarBlook"]] || user[0].blooks[newProps["avatarBlook"]] < 1) && newProps["avatarBlook"] !== "astronaut") res.status(403).send("You dont own that blook.")
                
                await pool.query("UPDATE users SET avatar = ? WHERE id = ?", [blookResult[0].image, req.session.user]);
                return res.status(200).send({
                    avatar: blookResult[0].image
                });

            }
        } catch (e) {
            console.error(e);
            res.status(500).send("Interal Server Error");
        }
    }
};