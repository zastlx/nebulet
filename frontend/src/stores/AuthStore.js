import { makeObservable, observable, action } from "mobx";
import APIManager from "../services/apiManager";
import logManager from "../services/logManager";
import { ENDPOINTS } from "../constants/endpoints";
import userStore from "./UserStore";

class AuthStore {
  isAuthenticated = false;
  authToken = null;

  constructor() {
    const storedAuthToken = localStorage.getItem("authToken");
    if (storedAuthToken) {
      this.authToken = storedAuthToken;
      this.isAuthenticated = true;
      userStore.init();
    }

    makeObservable(this, {
      isAuthenticated: observable,
      authToken: observable,
      authorize: action,
      logout: action,
    });
  }

  async authorize(authToken) {
    localStorage.setItem("authToken", authToken);
    userStore.init();

    this.authToken = authToken;
    this.isAuthenticated = true;
  }

  async logout() {
    if (!this.isAuthenticated) {
      throw { reason: "Not logged in." };
    }

    const response = await APIManager.post(ENDPOINTS.AUTHENTICATION.LOGOUT);
    const { status, data } = response;

    switch (status) {
      case 200:
        // Remove the token from localStorage
        localStorage.removeItem("authToken");

        this.isAuthenticated = false;
        logManager.log("[AuthStore] Successfully logged out");
        break;
      default:
        logManager.error(
          `[AuthStore] failed to logout with status "${status}" and data "${data}"`
        );
        throw { status, data };
    }
  }

  forceLogout() {
    // Remove the token from localStorage
    localStorage.removeItem("authToken");

    this.isAuthenticated = false;
    this.authToken = null;
  }
}

const authStore = new AuthStore();
window.as = authStore;
export default authStore;
