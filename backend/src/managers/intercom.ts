import {
    Socket
} from "net";

interface Message {
    type: string;
    [key: string]: any;
}

const handlers: { [key: string]: (message: Message) => void } = {
    exampleHandler: () => {},
};

let socket: Socket;

export const connectToSocket = () => {
    socket = new Socket();

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
                    const parsedMessage: Message = JSON.parse(message);
                    const {
                        type
                    } = parsedMessage;

                    if (handlers[type]) return handlers[type](parsedMessage);
                } catch (err) {
                    console.error("Error parsing message:", err);
                }
            }
        }

        partialData = messages[messages.length - 1];
    });

    socket.on("close", () => {
        console.log("Socket connection closed");
        connectToSocket();
    });

    socket.on("error", () => {});
};

connectToSocket();

// @ts-ignore
export default socket;