import { ENDPOINTS } from "../constants/endpoints";
import APIManager from "../services/apiManager";
import eventManager from "../services/eventManager";
import logManager from "../services/logManager";

export default class User {
    id;
    username;
    discord;
    created;
    avatar;
    badges;
    banner;
    blooks;
    shards;
    role;
    color;
    level;
    exp;
    friends;
    stats;
    claimed;
    banners;
    #isLocal;

    /*
    local:
    quests
    blocks
    claimed
    punishments
    banners (unlocked)
    */

    constructor(initValue, isLocal = false) {
        this.#isLocal = isLocal;
        this.id = initValue.id;
        this.username = initValue.username;
        this.created = new Date(initValue.created);
        this.avatar = initValue.avatar;
        this.badges = initValue.badges;
        this.banner = initValue.banner;
        this.blooks = initValue.blooks;
        this.shards = initValue.shards;
        this.role = initValue.role;
        this.color = initValue.color;
        this.exp = initValue.exp;
        this.friends = initValue.friends;
        this.stats = initValue.stats;
        this.claimed = initValue.claimed;

        if (isLocal) {
            this.banners = initValue.banners;
            this.discord = initValue.discord;
            this.quests = initValue.quests;
            this.blocks = initValue.blocks;
            this.claimed = new Date(initValue.claimed);
            this.punishments = initValue.punishments;
            this.otp = {
                secret: "",
                enabled: false
            };
            this.perms = initValue.perms;
            this.expeditions = initValue.expeditions;
        }

        this.level = Math.floor(this.exp / 150);
    }

    update(newProps) {
        Object.assign(this, {
            ...this,
            ...newProps
        });

        if (this.#isLocal) eventManager.dispatch("LOCAL_USER_UPDATE");
        else eventManager.dispatch("USER_UPDATE", { id: this.id, newUser: this });
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

window.user = User;