const path = require('path');
const fs = require('fs');
const {
    v4: uuidv4
} = require('uuid');

class SessionsManager {
    memcache;

    constructor() {
        this.dir = path.join(process.cwd(), 'sessions');
        this.memcache = {};

        this.timeout = 30 * 60 * 1000;
        this.startCleanupInterval();
        let isCleanupInProgress = false;

        const cleanup = async () => {
            if (isCleanupInProgress) {
                return; 
            }
    
            isCleanupInProgress = true; 
    
            console.log('[SessionManager] Shutdown initiated. Saving sessions to disk...');
            await this.saveAllSessionsToDisk();
    
            isCleanupInProgress = false;
        };
    
        process.on('exit', async () => {
            await cleanup();
            console.log('[SessionManager] Cleanup completed. Exiting process.');
        });
    
        process.on('SIGINT', async () => {
            await cleanup();
            console.log('[SessionManager] Cleanup completed. Exiting process.');
            process.kill(process.pid, 9);
        });
    }

    async saveAllSessionsToDisk() {
        for (const sessionId in this.memcache) {
            const thing = path.join(this.dir, `${sessionId}.json`);
            await fs.promises.writeFile(thing, JSON.stringify(this.memcache[sessionId]), 'utf8');
            console.log((await fs.promises.readFile(thing)).toString()); // returns the correct data as expected (wtf)
        }
    }

    startCleanupInterval() {
        const cleanup = () => {
            const now = Date.now();
            for (const sessionId in this.memcache) {
                const session = this.memcache[sessionId];
                if (this.isSessionInactive(session, now)) {
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
        const sid = uuidv4();
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
                const fileContent = await fs.promises.readFile(sPath, 'utf8');
                const session = JSON.parse(fileContent);
                session.lastAccessTime = Date.now();
                this.memcache[sid] = session;
            }

            return this.memcache[sid];
        } catch (error) {
            console.log(error);
            return {
                err: true
            };
        }
    }

    async middleWare(req, res, next) {
        let SID = req.headers['authorization'];
        let session = (await this.get(SID))

        if (session.err) {
            SID = this.create();
            session = this.memcache[SID]
        }
      
        // if (!reqSID || !this.memcache[reqSID] || this.isSessionInactive(this.memcache[reqSID], Date.now())) {
        //   reqSID = this.create();
        //   session = this.memcache[reqSID]; // The session object already exists in memory, so no need to fetch it from disk.
        //   res.set("Authorization", reqSID);
        // } else {
        //   session = this.memcache[reqSID];
        // }
      
        req.session = new Proxy(session, {
          set: (target, property, value) => {
            target[property] = value;
            this.memcache[SID][property] = value; // Use reqSID instead of session.id to update the session in the memcache
            return true;
          },
        });
      
        next();
      }
      
      
}

module.exports = SessionsManager;