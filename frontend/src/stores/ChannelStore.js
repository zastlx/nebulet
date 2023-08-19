import {
    makeObservable,
    action,
    observable
} from "mobx";
import Channel from "../models/channel";
import APIManager from "../services/apiManager";
import { ENDPOINTS } from "../constants/endpoints";
import authStore from "./AuthStore";
import logManager from "../services/logManager";
import eventManager from "../services/eventManager";

class ChannelStore {
    #channels = [];
    #selectedChannel;
    isInited = false;

    constructor() {
        makeObservable(this, {
            addChannel: action,
            removeChannel: action,
            updateChannel: action,
            clearChannels: action,
            getChannel: action,
            getChannels: action,
            filter: action,
            forEach: action,
            isInited: observable
        });
    }

    addChannel(data) {
        const channel = new Channel(data);
        this.#channels.push(channel);
        eventManager.dispatch("CHANNEL_STORE_UPDATE");
    }

    removeChannel(channelName) {
        const index = this.#channels.findIndex((channel) => channel.name === channelName);
        if (index !== -1) this.#channels.splice(index, 1);
        eventManager.dispatch("CHANNEL_STORE_UPDATE");

    }

    updateChannel(channelName, updatedchannel) {
        const channelIndex = this.#channels.findIndex((channel) => channel.name === channelName);
        if (channelIndex !== -1) this.#channels[channelIndex] = {
                ...this.#channels[channelIndex],
                ...updatedchannel,
        };
        eventManager.dispatch("CHANNEL_STORE_UPDATE");
    }

    getChannel(channelName) {
        return this.#channels.find((channel) => channel.name === channelName);
    }

    getChannels() {
        return this.#channels.reduce((channelObject, channel) => {
            channelObject[channel.name] = channel;
            return channelObject;
        }, {});
    }

    filter(predicate) {
        return this.#channels.filter(predicate);
    }

    forEach(callback) {
        this.#channels.forEach(callback);
    }

    clearChannels() {
        this.#channels = [];
        eventManager.dispatch("CHANNEL_STORE_UPDATE");
    }

    getCurrentChannel() {
        return this.#channels.find((channel) => channel.id === this.#selectedChannel);
    }

    setCurrentChannel(id) {
        this.#selectedChannel = id;
        eventManager.dispatch("CHANNEL_STORE_UPDATE");
    }

    async init() {
        const response = await APIManager.get(ENDPOINTS.CHAT.CHANNELS.ALL);
    
        const { status, data } = response;
    
        switch (status) {
            case 200:
                this.isInited = true;
                this.#channels = this.#channels.concat(data);
                eventManager.dispatch("CHANNEL_STORE_INIT");
                break;
            case 401:
                authStore.forceLogout();
                break;
            default:
                logManager.error(status, data);
                break;
        }
      }

      getRawChannels() {
        return this.#channels;
      }
}

const channelStore = new ChannelStore();
window.cs = channelStore;
export default channelStore;