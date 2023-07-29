import Blook from "../../models/blook";
import Channel from "../../models/channel";
import Message from "../../models/message";
import Pack from "../../models/pack";
import User from "../../models/user";
import eventManager from "../eventManager";

// Message
export function handleMessageCreate(messageRaw) {
    const message = new Message(messageRaw);
    eventManager.dispatch("MESSAGE_CREATE", message);
}
export function handleMessageUpdate(messageRaw) {
    const message = new Message(messageRaw);
    eventManager.dispatch("MESSAGE_UPDATE", message);
}
export function handleMessageDelete(messageId) {
    eventManager.dispatch("MESSAGE_DELETE", messageId);
}
export function handleMessageReact(data) {
    const { reactions, messageId } = data;
    eventManager.dispatch("MESSAGE_REACT", {
        reactions,
        messageId
    });
}

// Channel
export function handleChannelCreate(channelRaw) {
    const channel = new Channel(channelRaw);
    eventManager.dispatch("CHANNEL_CREATE", channel);
}
export function handleChannelUpdate(channelRaw) {
    const channel = new Channel(channelRaw);
    eventManager.dispatch("CHANNEL_UPDATE", channel);
}
export function handleChannelDelete(channelId) {
    eventManager.dispatch("CHANNEL_DELETE", channelId);
}
export function handleChannelRecipientAdd(data) {
    const { recipients, channelId } = data;
    eventManager.dispatch("CHANNEL_RECIPIENT_ADD", {
        recipients,
        channelId
    });
}
export function handleTypingStart(data) {
    const { userId, channelId } = data;
    eventManager.dispatch("TYPING_START", {
        userId,
        channelId
    });
}
export function handleTypingStop(data) {
    const { userId, channelId } = data;
    eventManager.dispatch("TYPING_STOP", {
        userId,
        channelId
    });
}

// Pack
export function handlePackCreate(packRaw) {
    const pack = new Pack(packRaw);
    eventManager.dispatch("PACK_CREATE", pack);
}
export function handlePackUpdate(packRaw) {
    const pack = new Pack(packRaw);
    eventManager.dispatch("PACK_CREATE", pack);
}
export function handlePackDelete(packId) {
    eventManager.dispatch("PACK_DELETE", packId);
}

// Blook
export function handleBlookCreate(blookRaw) {
    const blook = new Blook(blookRaw);
    eventManager.dispatch("BLOOK_CREATE", blook);
}
export function handleBlookUpdate(blookRaw) {
    const blook = new Blook(blookRaw);
    eventManager.dispatch("BLOOK_CREATE", blook);
}
export function handleBlookDelete(blookId) {
    eventManager.dispatch("BLOOK_DELETE", blookId);
}

// Local Stuff
export function handleUsersBatch(membersRaw) {
    const members = membersRaw.map(memberRaw => new User(memberRaw));
    eventManager.dispatch("USERS_BATCH", members);
}
export function handleLogout() {
    eventManager.dispatch("LOGOUT");
}
export function handleBan() {
    eventManager.dispatch("BAN");
}
export function handleMute(mute) {
    eventManager.dispatch("MUTE", mute);
}
export function handleBlacklist(reason) {
    eventManager.dispatch("BLACKLIST", reason);
}

// User
export function handleUserCreate(userRaw) {
    const user = new User(userRaw);
    eventManager.dispatch("USER_CREATE", user);
}
export function handleUserUpdate(userRaw) {
    const user = new User(userRaw);
    eventManager.dispatch("USER_UPDATE", user);
}
export function handleUserDelete(userId) {
    eventManager.dispatch("USER_DELETE", userId);
}