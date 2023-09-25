import { makeObservable, action } from "mobx";
import Pack from "../models/pack";
import authStore from "./AuthStore";
import APIManager from "../services/apiManager";
import { ENDPOINTS } from "../constants/endpoints";
import logManager from "../services/logManager";
import eventManager from "../services/eventManager";

class PackStore {
  #packs = [];

  constructor() {
    makeObservable(this, {
      addPack: action,
      removePack: action,
      updatePack: action,
      clearPacks: action,
      getPack: action,
      getPacks: action,
      filter: action,
      forEach: action,
    });
  }

  addPack(data) {
    const pack = new Pack(data);
    this.#packs.push(pack);
    eventManager.dispatch("PACK_STORE_UPDATE");
  }

  removePack(packName) {
    const index = this.#packs.findIndex((pack) => pack.name === packName);
    if (index !== -1) {
      this.#packs.splice(index, 1);
      eventManager.dispatch("PACK_STORE_UPDATE");
    }
  }

  updatePack(packName, updatedPack) {
    const packIndex = this.#packs.findIndex((pack) => pack.name === packName);
    if (packIndex !== -1) {
      this.#packs[packIndex] = {
        ...this.#packs[packIndex],
        ...updatedPack,
      };
      eventManager.dispatch("PACK_STORE_UPDATE");
    }
  }

  getPack(packName) {
    return this.#packs.find((pack) => pack.name === packName);
  }

  getPacks() {
    return this.#packs.reduce((packObject, pack) => {
      packObject[pack.name] = pack;
      return packObject;
    }, {});
  }

  getPacksArray() {
    return this.#packs;
  }

  filter(predicate) {
    return this.#packs.filter(predicate);
  }

  forEach(callback) {
    this.#packs.forEach(callback);
  }

  clearPacks() {
    this.#packs = [];
    eventManager.dispatch("PACK_STORE_UPDATE");
  }

  async init() {
    const response = await APIManager.get(ENDPOINTS.MARKET.PACKS);

    const { status, data } = response;

    switch (status) {
        case 200:
            this.isInited = true;
            eventManager.dispatch("PACK_STORE_INIT");
            this.#packs = this.#packs.concat(data);
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

const packStore = new PackStore();
window.ps = packStore;
/*eslint-disable*/
try {
  if (authStore.isAuthenticated && packStore.isInited === false) await packStore.init()
} catch {}
export default packStore;
