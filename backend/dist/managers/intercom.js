"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToSocket = void 0;
const net_1 = require("net");
const handlers = {
    exampleHandler: () => { },
};
let socket;
const connectToSocket = () => {
    socket = new net_1.Socket();
    socket.connect(1337, "localhost", () => {
        console.log("Connected to local intercom server");
        socket.write(JSON.stringify({
            type: "init",
            identifer: "child",
        }) + "\n");
    });
    let partialData = "";
    socket.on("data", (data) => {
        const combinedData = partialData + data.toString();
        const messages = combinedData.split("\n");
        for (let i = 0; i < messages.length - 1; i++) {
            const message = messages[i];
            if (message.trim() !== "") {
                try {
                    const parsedMessage = JSON.parse(message);
                    const { type } = parsedMessage;
                    if (handlers[type])
                        return handlers[type](parsedMessage);
                }
                catch (err) {
                    console.error("Error parsing message:", err);
                }
            }
        }
        partialData = messages[messages.length - 1];
    });
    socket.on("close", () => {
        console.log("Socket connection closed");
        (0, exports.connectToSocket)();
    });
    socket.on("error", () => { });
};
exports.connectToSocket = connectToSocket;
(0, exports.connectToSocket)();
// @ts-ignore
exports.default = socket;
