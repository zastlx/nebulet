import { ENDPOINTS } from "../constants/endpoints";
import APIManager from "../services/apiManager";
import userStore from "../stores/UserStore";
import { ChannelModel } from "../types/models";

export default class Channel implements ChannelModel {
    id;
    name;
    type;
    description;
    botsAllowed;
    recipients;
    requiredPerms;
    owner;

    constructor(initValue: ChannelModel) {
        this.id = initValue.id;
        this.name = initValue.name;
        this.type = initValue.type;
        this.description = initValue.description;
        this.botsAllowed = initValue.botsAllowed;
        this.requiredPerms = initValue.requiredPerms;
        this.recipients = initValue.recipients;
        this.owner = initValue.owner;
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