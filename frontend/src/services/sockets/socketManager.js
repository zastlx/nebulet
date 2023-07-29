import {
    io
} from "socket.io-client";
import {
    DateTime
} from "luxon";
import {
    ENDPOINTS
} from "../../constants/endpoints";
import authStore from "../../stores/AuthStore";
import logManager from "../logManager";
import eventManager from "../eventManager";
import * as eventHandlers from "./eventHandler";

class SocketManager {
    #socket;
    #heartbeat;
    #socketSession;
    #states;

    constructor() {
        this.#socket = io(ENDPOINTS.SOCKETS.URL, {
            reconnection: true,
        });
        this.#states = {
            error: 4,
            success: 2,
        };

        this.#socket.on("connect", this.#handleConnect);
        this.#socket.on("disconnect", this.#handleDisconnect);
        this.#socket.on("reconnect", this.#handleReconnect);
        this.#socket.on("reconnect_failed", this.#handleReconnectFailed);
        this.#socket.on("hello", this.#handleHello);

        // Message
        this.#socket.on("messageCreate", eventHandlers.handleMessageCreate);
        this.#socket.on("messageUpdate", eventHandlers.handleMessageUpdate);
        this.#socket.on("messageDelete", eventHandlers.handleMessageDelete);
        this.#socket.on("messageReact", eventHandlers.handleMessageReact);

        // Channel
        this.#socket.on("channelCreate", eventHandlers.handleChannelCreate);
        this.#socket.on("channelUpdate", eventHandlers.handleChannelUpdate);
        this.#socket.on("channelDelete", eventHandlers.handleChannelDelete);
        this.#socket.on("channelRecipientAdd", eventHandlers.handleChannelRecipientAdd);
        this.#socket.on("typingStart", eventHandlers.handleTypingStart);
        this.#socket.on("typingStop", eventHandlers.handleTypingStop);

        // Pack
        this.#socket.on("packCreate", eventHandlers.handlePackCreate);
        this.#socket.on("packUpdate", eventHandlers.handlePackUpdate);
        this.#socket.on("packDelete", eventHandlers.handlePackDelete);

        // Blook
        this.#socket.on("blookCreate", eventHandlers.handleBlookCreate);
        this.#socket.on("blookUpdate", eventHandlers.handleBlookUpdate);
        this.#socket.on("blookDelete", eventHandlers.handleBlookDelete);

        // Local
        this.#socket.on("membersBatch", eventHandlers.handleMembersBatch);
        this.#socket.on("logout", eventHandlers.handleLogout);
        this.#socket.on("ban", eventHandlers.handleBan);
        this.#socket.on("mute", eventHandlers.handleMute);
        this.#socket.on("blacklist", eventHandlers.handleBlacklist);

        // User
        this.#socket.on("userCreate", eventHandlers.handleUserCreate);
        this.#socket.on("userUpdate", eventHandlers.handleUserUpdate);
        this.#socket.on("userDelete", eventHandlers.handleUserDelete);

    }

    #handleConnect() {
        eventManager.dispatch("SOCKET_CONNECT");
        logManager.log("[SOCKET] Connecting to socket server");
    }

    #handleDisconnect() {
        eventManager.dispatch("SOCKET_DISCONNECT");
        clearInterval(this.#heartbeat);
    }

    #handleReconnect(attempt) {
        eventManager.dispatch("SOCKET_RECONNECT", {
            attempt
        });
        this.#initHeartbeat();
    }

    #handleReconnectFailed() {
        eventManager.dispatch("SOCKET_FAILURE");
        logManager.error("[SOCKET] Failed to reconnect to socket");
    }

    #handleHello(data) {
        const {
            hb_int
        } = data;

        this.#initHeartbeat(hb_int);
        this.#authenticate();
    }

    #initHeartbeat(data) {
        const {
            hb_int
        } = data;
        this.#heartbeat = setInterval(() => {
            this.#socket.emit("heartbeat", {
                time: DateTime.now().toMillis(),
            });
        }, hb_int);
    }

    #authenticate() {
        this.#socket.emitWithAck("auth", {
            token: authStore.authToken,
        }, (response) => {
            const {
                state,
                session
            } = response;

            if (state.code === this.#states.error) {
                logManager.error("[SOCKET] Authentication failed:", state.message);
                eventManager.dispatch("SOCKET_AUTH_FAILURE", state.message);
            } else {
                this.#socketSession = session;
            }
        });
    }
}

const socketManager = new SocketManager();

export default socketManager;