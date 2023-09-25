import { ENDPOINTS } from "../constants/endpoints";
import APIManager from "../services/apiManager";
import logManager from "../services/logManager";

export default class Pack {
    name;
    level;
    price;
    image;
    background;
    blooks;

    constructor(initValue) {
        this.name = initValue.name;
        this.level = initValue.level;
        this.price = initValue.price;
        this.image = initValue.image;
        this.background = initValue.background;   
        this.blooks = initValue.blooks;
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

    canAfford(cur) {
        return this.price <= cur;
    }
}