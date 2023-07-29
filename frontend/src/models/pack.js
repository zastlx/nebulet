import { ENDPOINTS } from "../constants/endpoints";
import APIManager from "../services/apiManager";
import blookStore from "../stores/BlookStore";
import logManager from "../services/logManager";

export default class Pack {
    id;
    name;
    rarity;
    price;

    constructor(initValue) {
        this.id = initValue.id;
        this.name = initValue.name;
        this.rarity = initValue.rarity;
        this.price = initValue.price;
    }

    update(newProps) {
        Object.assign(this, {
            ...this,
            ...newProps
        });
    }

    async open() {
        try {
            const response = await APIManager.post(ENDPOINTS.MARKET.OPEN(this.id || this.name));
            const { status, data } = response;

            switch (status) {
                case 401:
                    logManager.error(`[pack] Invalid authorization: ${data}`);
                    break;
                case 200:
                    return data;
                default:
                    logManager.error("Unknown status code recieved: ".concat(status));
                    break;
            }
        } catch (error) {
            throw { error };
        }
    }

    getName() {
        return `${this.name} Pack`;
    }

    getBlooks() {
        return blookStore.filter(blook => blook.pack === this.id);
    }

    canAfford(cur) {
        return this.price <= cur;
    }
}