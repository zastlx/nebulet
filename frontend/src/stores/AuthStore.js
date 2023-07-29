import { makeObservable, observable, action } from "mobx";
import APIManager from "../services/apiManager";
import logManager from "../services/logManager";
import { ENDPOINTS } from "../constants/endpoints";

class AuthStore {
  isAuthenticated = false;
  authToken = null;

  constructor() {
    // Check if a token is already stored in localStorage during initialization
    const storedAuthToken = localStorage.getItem("authToken");
    if (storedAuthToken) {
      this.authToken = storedAuthToken;
      this.isAuthenticated = true;
    }

    makeObservable(this, {
      isAuthenticated: observable,
      authToken: observable,
      authorize: action,
      logout: action,
    });
  }

  async authorize(authToken) {
    // Save the token in localStorage
    localStorage.setItem("authToken", authToken);

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
export default authStore;
