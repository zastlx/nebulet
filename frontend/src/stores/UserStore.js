import { makeObservable, observable, action } from "mobx";
import { ENDPOINTS } from "../constants/endpoints";
import APIManager from "../services/apiManager";
import logManager from "../services/logManager";
import User from "../models/user";
import authStore from "./AuthStore";

class UserStore {
    #users = [];
    loading;

    constructor() {
        makeObservable(this, {
            getUser: action,
            getLocalUser: action,
            getUsers: action,
            addUser: action,
            removeUser: action,
            updateUser: action,
            clearUsers: action,
            filter: action,
            forEach: action,
            init: action,
            loading: observable,
        });
    }

    getUser(userID) {
        return this.#users.find(user => user.id === userID);
    }

    getUsers() {
        return this.#users.reduce((userObject, user) => {
            userObject[user.id] = user;
            return userObject;
        }, {});
    }

    getLocalUser(dev = false) {
        if (dev) {
            return new User({
                id: "0",
                username: "zastix",
                created: "2023-07-31T12:00:00Z",
                avatar: "/content/blooks/Astronaut.png",
                badges: "[\"badge1\", \"badge2\"]",
                banner: "/content/banners/default.png",
                blooks: "[\"blook1\", \"blook2\"]",
                shards: 100,
                role: "Common",
                color: "#ffcc00",
                exp: 250,
                friends: "[\"friend1\", \"friend2\"]",
                stats: "user_stats",
                claimed: "[\"claim1\", \"claim2\"]",
                quests: "[\"quest1\", \"quest2\"]",
                blocks: "[\"block1\", \"block2\"]",
                punishments: "[\"punishment1\", \"punishment2\"]",
                perms: "[\"perm1\", \"perm2\"]",
              }, true);
        } else {
            return this.#users.find(user => user.isLocal());
        }
    }

    addUser(data, isLocal) {
        const user = new User(data, isLocal);
        this.#users.push(user);
    }

    removeUser(userID) {
        this.#users = this.#users.filter(user => user.id !== userID);
    }

    updateUser(userID, updatedProperties) {
        const userIndex = this.#users.findIndex(user => user.id === userID);
        if (userIndex !== -1) {
            this.#users[userIndex] = {
                ...this.#users[userIndex],
                ...updatedProperties,
            };
        }
    }

    clearUsers() {
        this.#users = [];
    }

    filter(predicate) {
        return this.#users.filter(predicate);
    }

    forEach(callback) {
        this.#users.forEach(callback);
    }

    async init() {
        console.trace("init call");
        try {
            this.loading = true;
            const localUser = this.getLocalUser();
            if (!localUser) {
                const response = await APIManager.get(ENDPOINTS.USER.INFO());
                const { status, data } = response;
    
                switch (status) {
                    case 401:
                        authStore.forceLogout();
                        window.location.pathname = "/login";
                        break;
                    case 200: {
                        const user = new User(data, true);
                        this.#users.push(user);
                        this.loading = false;
                        break;
                    }
                    default:
                        logManager.error(`[UserStore] Unknown status code received: ${status}`);
                        throw { status, data };
                }
            }
        } catch (error) {
            logManager.error(`[UserStore] Error occurred during initialization: ${error.message}`);
            throw error;
        }
    } 
}

const userStore = new UserStore();
window.us = userStore;
export default userStore;
