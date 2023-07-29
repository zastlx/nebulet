import { ENDPOINTS } from "../constants/endpoints";
import APIManager from "../services/apiManager";
import userStore from "../stores/UserStore";

export default class Channel {
    id;
    name;
    type; // 1 (text) for chat/trade/bot, 2  for offers/events, 3 for dm, 4 for gc, and 5 for trade 
    desc;
    botsAllowed;
    recipients;
    requiredPerms;
    owner;

    constructor(initValue) {
        this.id = initValue.id;
        this.name = initValue.name;
        this.type = initValue.type;
        this.desc = initValue.desc;
        this.botsAllowed = initValue.botsAllowed;
        this.requiredPerms = JSON.parse(initValue?.requiredPerms) || [];

        switch (this.type) {
            case 4:
                this.owner = initValue.owner;
            case 3:
                this.recipients = JSON.parse(initValue.recipients) || [];
                break;
            default:
                break;
        }
    }

    hasPerm() {
        // array1.some(r=> array2.indexOf(r) >= 0) - https://stackoverflow.com/a/39893636
        // return userStore.getLocalUser().perms.includes(this.requiredPerm); - old code

       return this.requiredPerms.some(permission => userStore.getLocalUser().perms.includes(permission));
    }

    async send(message) {
        const response = await APIManager.post(ENDPOINTS.CHAT.CHANNELS.MESSAGES(this.id), {
            content: message
        });
        const { data, status } = response;

        switch (status) {
            case 401:
                throw { status, data };
            case 200:
                return data;
            default:
                throw new Error("[message] recived unkonwn status code");
        }
    }

    async search() { // i dont want to implement reight now o si will do it later
        
    }

    isDM() {
        return this.type === 3;
    }

    isGroupChat() {
        return this.type === 4;
    }

    isTrade() {
        return this.type === 5;
    }

    isBotChannel() {
        return this.botsAllowed;
    }

    isOwner() {
        return this.owner === userStore.getLocalUser().id;
    }
}