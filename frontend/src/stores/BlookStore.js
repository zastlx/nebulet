import { makeObservable, action, observable } from "mobx";
import Blook from "../models/blook";
import authStore from "./AuthStore";
import APIManager from "../services/apiManager";
import { ENDPOINTS } from "../constants/endpoints";
import logManager from "../services/logManager";

class BlookStore {
  #blooks = [];
  isInited = false;

  constructor() {
    makeObservable(this, {
      addBlook: action,
      removeBlook: action,
      updateBlook: action,
      clearBlooks: action,
      getBlook: action,
      getBlooks: action,
      filter: action,
      forEach: action,
      init: action,
      isInited: observable,
    });
  }

  addBlook(data) {
    const blook = new Blook(data);
    this.#blooks.push(blook);
  }

  removeBlook(blookName) {
    const index = this.#blooks.findIndex((blook) => blook.name === blookName);
    if (index !== -1) {
      this.#blooks.splice(index, 1);
    }
  }

  updateBlook(blookName, updatedblook) {
    const blookIndex = this.#blooks.findIndex((blook) => blook.name === blookName);
    if (blookIndex !== -1) {
      this.#blooks[blookIndex] = {
        ...this.#blooks[blookIndex],
        ...updatedblook,
      };
    }
  }

  getBlook(blookName) {
    return this.#blooks.find((blook) => blook.name === blookName);
  }

  getBlooks() {
    return this.#blooks.reduce((blookObject, blook) => {
      blookObject[blook.name] = blook;
      return blookObject;
    }, {});
  }

  filter(predicate) {
    return this.#blooks.filter(predicate);
  }

  forEach(callback) {
    this.#blooks.forEach(callback);
  }

  clearBlooks() {
    this.#blooks = [];
  }

  async init() {
    const response = await APIManager.get(ENDPOINTS.BLOOKS.ALL);

    const { status, data } = response;

    switch (status) {
        case 200:
            this.isInited = true;
            this.#blooks = this.#blooks.concat(data);
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

const blookStore = new BlookStore();
/*eslint-disable*/
try {
    if (authStore.isAuthenticated && blookStore.isInited === false) await blookStore.init()
} catch {}
export default blookStore;
