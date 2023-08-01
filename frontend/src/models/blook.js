import {
    ENDPOINTS
} from "../constants/endpoints";
import APIManager from "../services/apiManager";
import userStore from "../stores/UserStore";

export default class Blook {
    name;
    displayName;
    image;
    rarity;
    pack;
    value;

    constructor(initValue) {
        this.name = initValue.name;
        this.displayName = initValue.displayName;
        this.image = initValue.image;
        this.rarity = initValue.rarity;
        this.pack = initValue.pack;
        this.value = initValue.value;
    }

    update(newProps) {
        Object.assign(this, {
            ...this,
            ...newProps
        });
    }

    async sell(quantity) {
        const response = await APIManager.post(ENDPOINTS.BLOOKS.SELL, {
            blook: this.name,
            quantity
        });
        const {
            status,
            data
        } = response;

        if (status === 200) return data;
        else throw {
            status,
            data
        };
    }

    list() {

    }

    async isOwned() {
        return userStore.getLocalUser().blooks[this.name] >= 1;
    }

    getAverageValue() {}
}