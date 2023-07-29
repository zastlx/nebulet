import { ENDPOINTS } from "../constants/endpoints";
import APIManager from "../services/apiManager";
import logManager from "../services/logManager";

export default class User {
    id;
    username;
    created;
    avatar;
    badges;
    banner;
    blooks;
    shards;
    role;
    color;
    exp;
    friends;
    stats;
    claimed;
    #isLocal;

    /*
    local:
    quests
    blocks
    claimed
    punishments
    */

    constructor(initValue, isLocal) {
        this.#isLocal = isLocal;
        this.id = initValue.id;
        this.username = initValue.username;
        this.created = new Date(initValue.created);
        this.avatar = initValue.avatar;
        this.badges = JSON.parse(initValue.badges);
        this.banner = initValue.banner;
        this.blooks = JSON.parse(initValue.blooks);
        this.shards = initValue.shards;
        this.role = initValue.role;
        this.color = initValue.color;
        this.exp = initValue.exp;
        this.friends = JSON.parse(initValue.friends);
        this.stats = initValue.stats;
        this.claimed = JSON.parse(initValue.claimed);

        if (isLocal) {
            this.quests = JSON.parse(initValue.quests);
            this.blocks = JSON.parse(initValue.blocks);
            this.claimed = new Date(initValue.claimed);
            this.punishments = new Date(initValue.punishments);
            this.otp = {
                secret: "",
                enabled: false
            };
            this.perms = JSON.parse(initValue.perms);
        }
    }

    isLocal() {
        return this.#isLocal;
    }

    block() {
        return new Promise((resolve, reject) => {
            APIManager.post(ENDPOINTS.USER.BLOCK(this.id)).then((response) => {
                const { status, data } = response;

                switch (status) {
                    case 401:
                        logManager.error("Error blocking user: ".concat(data));
                        reject({
                            status,
                            data
                        });
                        break;
                    case 200:
                        resolve();
                        break;
                    default:
                        logManager.error("Unknown status code recieved: ".concat(status));
                        break;
                }
            }).catch((err) => reject(err));
        });
    }

    unblock() {
        return new Promise((resolve, reject) => {
            APIManager.delete(ENDPOINTS.USER.BLOCK(this.id)).then((response) => {
                const { status, data } = response;

                switch (status) {
                    case 401:
                        logManager.error("Error unblocking user: ".concat(data));
                        reject({
                            status,
                            data
                        });
                        break;
                    case 200:
                        resolve();
                        break;
                    default:
                        logManager.error("Unknown status code recieved: ".concat(status));
                        break;
                }
            }).catch((err) => reject(err));
        });
    }

    friend() {
        return new Promise((resolve, reject) => {
            APIManager.post(ENDPOINTS.USER.FRIEND(this.id)).then((response) => {
                const { status, data } = response;

                switch (status) {
                    case 401:
                        logManager.error("Error friending user: ".concat(data));
                        reject({
                            status,
                            data
                        });
                        break;
                    case 200:
                        resolve();
                        break;
                    default:
                        logManager.error("Unknown status code recieved: ".concat(status));
                        break;
                }
            }).catch((err) => reject(err));
        });
    }

    unfriend() {
        return new Promise((resolve, reject) => {
            APIManager.delete(ENDPOINTS.USER.FRIEND(this.id)).then((response) => {
                const { status, data } = response;

                switch (status) {
                    case 401:
                        logManager.error("Error unfriending user: ".concat(data));
                        reject({
                            status,
                            data
                        });
                        break;
                    case 200:
                        resolve();
                        break;
                    default:
                        logManager.error("Unknown status code recieved: ".concat(status));
                        break;
                }
            }).catch((err) => reject(err));
        });
    } 

    report(reason) {
        return new Promise((resolve, reject) => {
            APIManager.post(ENDPOINTS.USER.REPORT(this.id), {
                reason
            }).then((response) => {
                const { status, data } = response;

                switch (status) {
                    case 401:
                        logManager.error("Error reporting user: ".concat(data));
                        reject({
                            status,
                            data
                        });
                        break;
                    case 200:
                        resolve();
                        break;
                    default:
                        logManager.error("Unknown status code recieved: ".concat(status));
                        break;
                }
            }).catch((err) => reject(err));
        });
    }

    getDMChannel() {
        // implement this alter weith channel stores and that fun shit :))))))
    }

    isBot() {
        return this.badges.includes("bot");
    }

    isStaff() {
        return this.badges.includes("staff");
    }

    isCool() {
        return this.username === "thonk" || this.username === "zastix";
    }
}