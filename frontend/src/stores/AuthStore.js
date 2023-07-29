import {
    makeObservable,
    observable,
    action
} from "mobx";
import APIManager from "../services/apiManager";
import logManager from "../services/logManager";
import {
    ENDPOINTS
} from "../constants/endpoints";

class AuthStore {
    isAuthenticated = false;
    authToken = null;

    constructor() {
        makeObservable(this, {
            isAuthenticated: observable,
            authToken: observable,
            authorize: action,
            logout: action,
        });
    }

    async authorize(authToken) {
        this.authToken = authToken;
        this.isAuthenticated = true;
    }


    async logout() {
        if (!this.isAuthenticated) {
            throw {
                reason: "Not logged in."
            };
        }

        const response = await APIManager.post(ENDPOINTS.AUTHENTICATION.LOGOUT);
        const {
            status,
            data
        } = response;

        switch (status) {
            case 200:
                this.isAuthenticated = false;
                logManager.log("[AuthStore] Successfully logged out");
                break;
            default:
                logManager.error(`[AuthStore] failed to logout with status "${status}" and data "${data}"`);
                throw {
                    status, data
                };
        }
    }


    forceLogout() {
        this.isAuthenticated = false;
        this.authToken = null;
    }
}

const authStore = new AuthStore();
export default authStore;