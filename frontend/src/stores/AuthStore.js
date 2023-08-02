import { makeObservable, observable, action } from "mobx";
import APIManager from "../services/apiManager";
import logManager from "../services/logManager";
import { ENDPOINTS } from "../constants/endpoints";
import userStore from "./UserStore";
import blookStore from "./BlookStore";
import bannerStore from "./BannerStore";

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
    this.authToken = authToken;
    this.isAuthenticated = true;
    await userStore.init();
    if (blookStore.isInited === false) await blookStore.init();
    if (bannerStore.isInited === false) await bannerStore.init();

  }

  async logout() {
    if (!this.isAuthenticated) {
      throw { reason: "Not logged in." };
    }

    const response = await APIManager.post(ENDPOINTS.AUTHENTICATION.LOGOUT);
    const { status, data } = response;

    switch (status) {
      case 200:
        userStore.removeUser(userStore.getLocalUser()?.id);

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
    localStorage.removeItem("authToken");
    userStore.removeUser(userStore.getLocalUser()?.id);

    this.isAuthenticated = false;
    this.authToken = null;
  }
}

const authStore = new AuthStore();
window.as = authStore;
export default authStore;
