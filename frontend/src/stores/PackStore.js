import { makeObservable, action } from "mobx";
import Pack from "../models/pack";

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
  }

  removePack(packID) {
    const index = this.#packs.findIndex((pack) => pack.id === packID);
    if (index !== -1) {
      this.#packs.splice(index, 1);
    }
  }

  updatePack(packID, updatedPack) {
    const packIndex = this.#packs.findIndex((pack) => pack.id === packID);
    if (packIndex !== -1) {
      this.#packs[packIndex] = {
        ...this.#packs[packIndex],
        ...updatedPack,
      };
    }
  }

  getPack(packID) {
    return this.#packs.find((pack) => pack.id === packID);
  }

  getPacks() {
    return this.#packs.reduce((packObject, pack) => {
      packObject[pack.id] = pack;
      return packObject;
    }, {});
  }

  filter(predicate) {
    return this.#packs.filter(predicate);
  }

  forEach(callback) {
    this.#packs.forEach(callback);
  }

  clearPacks() {
    this.#packs = [];
  }

  init() {
    // implement initiation here after API finished
  }
}

const packStore = new PackStore();
export default packStore;
