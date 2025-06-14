import path from "path";
import fs from "fs";
import ids from "../utils/ids.js";
import { fileURLToPath } from "url";

class SessionsManager {
    memcache;
    dir;
    timeout;

    constructor() {
        this.dir = path.join(fileURLToPath(new URL('.', import.meta.url)), "..", "sessions");
        this.memcache = {};

        this.timeout = 30 * 60 * 1000;
        this.startCleanupInterval();

        let isCleanupInProgress = false;

        const cleanup = async () => {
            if (isCleanupInProgress) return;

            isCleanupInProgress = true;

            console.log("[SessionManager] Shutdown initiated. Saving sessions to disk...");
            await this.saveAllSessionsToDisk();

            isCleanupInProgress = false;
        };

        process.on("exit", async () => {
            await cleanup();
            console.log("[SessionManager] Cleanup completed. Exiting process.");
        });

        process.on("SIGINT", async () => {
            await cleanup();
            console.log("[SessionManager] Cleanup completed. Exiting process.");
            process.kill(process.pid, 9);
        });
    }

    async saveAllSessionsToDisk() {
        for (const sessionId in this.memcache) await this.writeSessionToDisk(sessionId);
    }

    async writeSessionToDisk(sid) {
        await fs.promises.writeFile(path.join(this.dir, `${sid}.json`), JSON.stringify(this.memcache[sid]), "utf8");
    }

    startCleanupInterval() {
        const cleanup = () => {
            const now = Date.now();
            for (const sessionId in this.memcache) {
                const session = this.memcache[sessionId];
                if (this.isSessionInactive(session, now)) {
                    this.writeSessionToDisk(sessionId);
                    delete this.memcache[sessionId];
                }
            }
            setTimeout(cleanup, this.timeout / 2); // Schedule the next cleanup
        };

        setTimeout(cleanup, this.timeout / 2); // Initial cleanup
    }

    isSessionInactive(session, currentTime) {
        return currentTime - session.lastAccessTime >= this.timeout;
    }

    create() {
        const sid = ids.session();
        this.memcache[sid] = {
            id: sid,
            lastAccessTime: Date.now(),
        };

        return sid;
    }

    async get(sid) {
        try {
            if (this.memcache[sid]) {
                this.memcache[sid].lastAccessTime = Date.now();
            } else {
                const sPath = path.join(this.dir, `${sid}.json`);
                const fileContent = await fs.promises.readFile(sPath, "utf8");
                const session = JSON.parse(fileContent);
                session.lastAccessTime = Date.now();
                this.memcache[sid] = session;
            }

            return this.memcache[sid];
        } catch (error) {
            return {
                err: true,
            };
        }
    }

    async middleWare(req, res, next) {
        let SID = req.headers["authorization"];
        let session = await this.get(SID || this.create());

        if (session.err) {
            SID = this.create();
            session = this.memcache[SID];
        }

        // @ts-ignore
        req.session = new Proxy(session || this.memcache[SID], {
            set: (target, property, value) => {
                target[property] = value;
                return true;
            },
        });

        next();
    }
}

const sessionsManager = new SessionsManager();

export default sessionsManager;