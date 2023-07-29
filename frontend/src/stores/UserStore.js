import { makeObservable, observable, action } from "mobx";
import { ENDPOINTS } from "../constants/endpoints";
import APIManager from "../services/apiManager";
import logManager from "../services/logManager";
import User from "../models/user";

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

    getLocalUser() {
        return this.#users.find(user => user.isLocal());
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
        try {
            const localUser = this.getLocalUser();
            if (!localUser) {
                const response = await APIManager.get(ENDPOINTS.USER.PROFILE());
                const { status, data } = response;
    
                switch (status) {
                    case 401:
                        logManager.error(`[UserStore] invalid authorization ${data}`);
                        throw { status, data };
                    case 200: {
                        const user = new User(data, true);
                        this.#users.push(user);
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
export default userStore;
