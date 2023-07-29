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
const ids_js_1 = __importDefault(require("../utils/ids.js"));
class SessionsManager {
    constructor() {
        this.memcache = {};
        this.dir = path_1.default.join(__dirname, '..', 'sessions');
        this.startCleanupInterval();
        setInterval(() => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('String periodic backup.');
                yield this.saveAllSessionsToDisk();
                console.log('Periodic backup completed.');
            }
            catch (error) {
                console.error('Error performing periodic backup:', error);
            }
        }), SessionsManager.timeout);
        process.on("exit", () => __awaiter(this, void 0, void 0, function* () {
            console.log('[SessionManager] Shutdown initiated. Saving sessions to disk...');
            yield this.saveAllSessionsToDisk();
            console.log('[SessionManager] Sessions saved. Exiting...');
        }));
    }
    saveAllSessionsToDisk() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const sessionId in this.memcache) {
                const session = this.memcache[sessionId];
                yield this.writeSessionToDisk(session, sessionId);
            }
        });
    }
    writeSessionToDisk(session, sid) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sPath = path_1.default.join(this.dir, `${sid}.json`);
                yield fs_1.default.promises.writeFile(sPath, JSON.stringify(session), 'utf8');
            }
            catch (error) {
                console.error('Error writing session to disk:', error);
            }
        });
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
            setTimeout(cleanup, SessionsManager.timeout / 2); // Schedule the next cleanup
        };
        setTimeout(cleanup, SessionsManager.timeout / 2); // Initial cleanup
    }
    isSessionInactive(session, currentTime) {
        return currentTime - session.lastAccessTime >= SessionsManager.timeout;
    }
    create(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const sid = ids_js_1.default.session();
            this.memcache[sid] = {
                userid: uid,
                lastAccessTime: Date.now()
            };
            return this.memcache[sid];
        });
    }
    get(sid) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.memcache[sid]) {
                    this.memcache[sid].lastAccessTime = Date.now();
                    return this.memcache[sid];
                }
                const sPath = path_1.default.join(this.dir, `${sid}.json`);
                // @ts-ignore
                const file = JSON.parse(yield fs_1.default.readFile(sPath, "utf8"));
                file.lastAccessTime = Date.now();
                this.memcache[sid] = file;
                return this.memcache[sid];
            }
            catch (error) {
                console.log(error);
                return {
                    err: true
                };
            }
        });
    }
    isValid(sid) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.memcache[sid])
                return true;
            try {
                const sPath = path_1.default.join(this.dir, `${sid}.json`);
                // @ts-ignore
                yield fs_1.default.access(sPath, fs_1.default.constants.F_OK);
                return true;
            }
            catch (_a) {
                return false;
            }
        });
    }
}
SessionsManager.timeout = 30 * 60 * 1000;
