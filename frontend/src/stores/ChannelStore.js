import {
    makeObservable,
    action
} from "mobx";
import Channel from "../models/channel";

class ChannelStore {
    #channels = [];

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
        });
    }

    addChannel(data) {
        const channel = new Channel(data);
        this.#channels.push(channel);
    }

    removeChannel(channelName) {
        const index = this.#channels.findIndex((channel) => channel.name === channelName);
        if (index !== -1) this.#channels.splice(index, 1);

    }

    updateChannel(channelName, updatedchannel) {
        const channelIndex = this.#channels.findIndex((channel) => channel.name === channelName);
        if (channelIndex !== -1) this.#channels[channelIndex] = {
                ...this.#channels[channelIndex],
                ...updatedchannel,
            };
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
    }
}

const channelStore = new ChannelStore();

export default channelStore;