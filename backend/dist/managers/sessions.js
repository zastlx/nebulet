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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const ids_1 = __importDefault(require("../utils/ids"));
class SessionsManager {
    constructor() {
        this.dir = path_1.default.join(process.cwd(), "sessions");
        this.memcache = {};
        this.timeout = 30 * 60 * 1000;
        this.startCleanupInterval();
        let isCleanupInProgress = false;
        const cleanup = () => __awaiter(this, void 0, void 0, function* () {
            if (isCleanupInProgress) {
                return;
            }
            isCleanupInProgress = true;
            console.log("[SessionManager] Shutdown initiated. Saving sessions to disk...");
            yield this.saveAllSessionsToDisk();
            isCleanupInProgress = false;
        });
        process.on("exit", () => __awaiter(this, void 0, void 0, function* () {
            yield cleanup();
            console.log("[SessionManager] Cleanup completed. Exiting process.");
        }));
        process.on("SIGINT", () => __awaiter(this, void 0, void 0, function* () {
            yield cleanup();
            console.log("[SessionManager] Cleanup completed. Exiting process.");
            process.kill(process.pid, 9);
        }));
    }
    saveAllSessionsToDisk() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const sessionId in this.memcache) {
                yield this.writeSessionToDisk(sessionId);
            }
        });
    }
    writeSessionToDisk(sid) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fs_1.default.promises.writeFile(path_1.default.join(this.dir, `${sid}.json`), JSON.stringify(this.memcache[sid]), "utf8");
        });
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
        const sid = ids_1.default.session();
        this.memcache[sid] = {
            id: sid,
            lastAccessTime: Date.now(),
        };
        return sid;
    }
    get(sid) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.memcache[sid]) {
                    this.memcache[sid].lastAccessTime = Date.now();
                }
                else {
                    const sPath = path_1.default.join(this.dir, `${sid}.json`);
                    const fileContent = yield fs_1.default.promises.readFile(sPath, "utf8");
                    const session = JSON.parse(fileContent);
                    session.lastAccessTime = Date.now();
                    this.memcache[sid] = session;
                }
                return this.memcache[sid];
            }
            catch (error) {
                return {
                    err: true,
                };
            }
        });
    }
    middleWare(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let SID = req.headers["authorization"];
            let session = yield this.get(SID || this.create());
            if (session.err) {
                SID = this.create();
                session = this.memcache[SID];
            }
            req.session = new Proxy(session || this.memcache[SID], {
                set: (target, property, value) => {
                    target[property] = value;
                    return true;
                },
            });
            next();
        });
    }
}
const sessionsManager = new SessionsManager();
exports.default = sessionsManager;
