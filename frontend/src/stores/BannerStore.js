import { makeObservable, action, observable } from "mobx";
import Banner from "../models/banner";
import authStore from "./AuthStore";
import APIManager from "../services/apiManager";
import { ENDPOINTS } from "../constants/endpoints";
import logManager from "../services/logManager";

class BannerStore {
  #banners = [];
  isInited = false;

  constructor() {
    makeObservable(this, {
      addBanner: action,
      removeBanner: action,
      updateBanner: action,
      clearBanners: action,
      getBanner: action,
      getBanners: action,
      filter: action,
      forEach: action,
      init: action,
      isInited: observable,
    });
  }

  addBanner(data) {
    const banner = new Banner(data);
    this.#banners.push(banner);
  }

  removeBanner(bannerName) {
    const index = this.#banners.findIndex((banner) => banner.name === bannerName);
    if (index !== -1) {
      this.#banners.splice(index, 1);
    }
  }

  updateBanner(bannerName, updatedbanner) {
    const bannerIndex = this.#banners.findIndex((banner) => banner.name === bannerName);
    if (bannerIndex !== -1) {
      this.#banners[bannerIndex] = {
        ...this.#banners[bannerIndex],
        ...updatedbanner,
      };
    }
  }

  getBanner(bannerName) {
    return this.#banners.find((banner) => banner.name === bannerName);
  }

  getBanners() {
    return this.#banners.reduce((bannerObject, banner) => {
      bannerObject[banner.name] = banner;
      return bannerObject;
    }, {});
  }

  filter(predicate) {
    return this.#banners.filter(predicate);
  }

  forEach(callback) {
    this.#banners.forEach(callback);
  }

  clearBanners() {
    this.#banners = [];
  }

  async init() {
    const response = await APIManager.get(ENDPOINTS.BANNERS.ALL);

    const { status, data } = response;

    switch (status) {
        case 200:
            this.isInited = true;
            this.#banners = this.#banners.concat(data);
            break;
        case 401:
            authStore.forceLogout();
            break;
        default:
            logManager.error(status, data);
            break;
    }
  }
}

const bannerStore = new BannerStore();
/*eslint-disable*/
try {
    if (authStore.isAuthenticated && bannerStore.isInited === false) await bannerStore.init()
} catch {}
export default bannerStore;
