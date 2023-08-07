import {
    makeObservable,
    action
} from "mobx";
import Message from "../models/message";

class MessageStore {
    #messages = [];

    constructor() {
        makeObservable(this, {
            addMessage: action,
            removeMessage: action,
            updateMessage: action,
            clearMessages: action,
            getMessage: action,
            getMessages: action,
            filter: action,
            forEach: action,
        });
    }

    addMessage(data) {
        const message = new Message(data);
        this.#messages.push(message);
    }

    removeMessage(messageName) {
        const index = this.#messages.findIndex((message) => message.name === messageName);
        if (index !== -1) this.#messages.splice(index, 1);

    }

    updateMessage(messageName, updatedmessage) {
        const messageIndex = this.#messages.findIndex((message) => message.name === messageName);
        if (messageIndex !== -1) this.#messages[messageIndex] = {
                ...this.#messages[messageIndex],
                ...updatedmessage,
            };
    }

    getMessage(messageName) {
        return this.#messages.find((message) => message.name === messageName);
    }

    getMessages() {
        return this.#messages.reduce((messageObject, message) => {
            messageObject[message.name] = message;
            return messageObject;
        }, {});
    }

    filter(predicate) {
        return this.#messages.filter(predicate);
    }

    forEach(callback) {
        this.#messages.forEach(callback);
    }

    clearMessages() {
        this.#messages = [];
    }
}

const messageStore = new MessageStore();

export default messageStore;