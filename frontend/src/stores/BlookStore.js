import { makeObservable, action } from "mobx";
import Blook from "../models/blook";


class BlookStore {
  #blooks = [];

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
      init: action
    });
  }

  addBlook(data) {
    const blook = new Blook(data);
    this.#blooks.push(blook);
  }

  removeBlook(blookID) {
    const index = this.#blooks.findIndex((blook) => blook.id === blookID);
    if (index !== -1) {
      this.#blooks.splice(index, 1);
    }
  }

  updateBlook(blookID, updatedblook) {
    const blookIndex = this.#blooks.findIndex((blook) => blook.id === blookID);
    if (blookIndex !== -1) {
      this.#blooks[blookIndex] = {
        ...this.#blooks[blookIndex],
        ...updatedblook,
      };
    }
  }

  getBlook(blookID) {
    return this.#blooks.find((blook) => blook.id === blookID);
  }

  getBlooks() {
    return this.#blooks.reduce((blookObject, blook) => {
      blookObject[blook.id] = blook;
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

  init() {
    // implement initiation here after API finished
  }
}

const blookStore = new BlookStore();
export default blookStore;
