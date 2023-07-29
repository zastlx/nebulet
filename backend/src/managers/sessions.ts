import path from "path";
import fs from "fs";
import ids from "../utils/ids.js";

interface Session {
    userid: string;
    lastAccessTime: number;
}

interface SessionCache {
    [sid: string]: Session;
}

class SessionsManager {
    dir: string;
    private memcache: SessionCache = {};

    private static readonly timeout = 30 * 60 * 1000;

    constructor() {
        this.dir = path.join(__dirname, '..', 'sessions');

        this.startCleanupInterval();

        setInterval(async () => {
            try {
                console.log('String periodic backup.');
                await this.saveAllSessionsToDisk();
                console.log('Periodic backup completed.');
              } catch (error) {
                console.error('Error performing periodic backup:', error);
              }
        }, SessionsManager.timeout);

        process.on("exit", async () => {
            console.log('[SessionManager] Shutdown initiated. Saving sessions to disk...');
            await this.saveAllSessionsToDisk();
            console.log('[SessionManager] Sessions saved. Exiting...');
        });
    }

    public async saveAllSessionsToDisk() {
        for (const sessionId in this.memcache) {
            const session = this.memcache[sessionId];
            await this.writeSessionToDisk(session, sessionId);
        }
    }

    public async writeSessionToDisk(session: Session, sid: string) {
        try {
            const sPath = path.join(this.dir, `${sid}.json`);
            await fs.promises.writeFile(sPath, JSON.stringify(session), 'utf8');
        } catch (error) {
            console.error('Error writing session to disk:', error);
        }
    }

    private startCleanupInterval() {
        const cleanup = () => {
            const now = Date.now();
            for (const sessionId in this.memcache) {
                const session = this.memcache[sessionId];
                if (this.isSessionInactive(session, now)) {
                    delete this.memcache[sessionId];
                }
            }
            setTimeout(cleanup, SessionsManager.timeout / 2); // Schedule the next cleanup
        };
    
        setTimeout(cleanup, SessionsManager.timeout / 2); // Initial cleanup
    }
    
    private isSessionInactive(session: Session, currentTime: number): boolean {
        return currentTime - session.lastAccessTime >= SessionsManager.timeout;
    }
    

    async create(uid: string) {
        const sid = ids.session();
        this.memcache[sid] = {
            userid: uid,
            lastAccessTime: Date.now()
        }

        return this.memcache[sid];
    }

    async get(sid: string) {
        try {
            if (this.memcache[sid]) {
                this.memcache[sid].lastAccessTime = Date.now();
                return this.memcache[sid]
            }

            const sPath = path.join(this.dir, `${sid}.json`);

            // @ts-ignore
            const file: Session = JSON.parse(await fs.readFile(sPath, "utf8"));
            file.lastAccessTime = Date.now();
            this.memcache[sid] = file;

            return this.memcache[sid];
        } catch (error) {
            console.log(error);
            return {
                err: true
            };
        }
    }

    async isValid(sid: string) {
        if (this.memcache[sid]) return true;

        try {
            const sPath = path.join(this.dir, `${sid}.json`);
            // @ts-ignore
            await fs.access(sPath, fs.constants.F_OK);
            return true;
        } catch {
            return false;
        }
    }
}