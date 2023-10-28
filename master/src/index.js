import net from "node:net";

let childs = [];
let botProcess;

const handlers = {
    wsEvent: (socket, data) => {

    },
    discordOAuth: (socket, data) => {
        botProcess.write(JSON.stringify({
            type: data.type,
            user: data.user
        }) + "\n");
    },
    altAccountAttempt: (socket, data) => {
        botProcess.write(JSON.stringify({
            type: data.type,
            user: data.user,
            userId: data.userId,
            newUser: data.newUser
        }) + "\n");
    }
};

const handleData = function (socket, data) {
    const {
        type
    } = data;

    switch (type) {
        case "init": {
            if (childs.includes(socket) || socket === botProcess) return socket.write(JSON.stringify({
                err: "alreadyInited",
                reason: "already inited the current socket connection"
            }), + "\n");
            const {
                identifer
            } = data;
            console.log(identifer, data);
            switch (identifer) {
                case "child": 
                    childs.push(socket);
                    socket.write(JSON.stringify({
                        msg: "added socket to children list"
                    }) + "\n");
                    break;
                case "bot":
                    botProcess = socket;
                    socket.write(JSON.stringify({
                        msg: "defined socket as bot"
                    }) + "\n");
                    break;
                default:
                    socket.write(JSON.stringify({
                        err: "badInitType",
                        reason: "incorrect type"
                    }) + "\n")
                    break;
            }
            break;
        }
        default:
            if (handlers[type]) handlers[type](socket, data)
            break;
    }
}

const master = net.createServer((socket) => {
    console.log("[Master] Client connected");

    let partialData = '';

    socket.on('data', (data) => {
        const combinedData = partialData + data.toString();

        const messages = combinedData.split('\n');
        for (let i = 0; i < messages.length - 1; i++) {
            const message = messages[i];
            if (message.trim() !== '') {
                try {
                    const parsedMessage = JSON.parse(message);
                    console.log('Received message:', parsedMessage);

                    handleData(socket, parsedMessage);
                } catch (err) {
                    console.error('Error parsing message:', err);
                }
            }
        }

        partialData = messages[messages.length - 1];
    });

    socket.on('end', () => {
        console.log("[Master] Client disconnected");

        const index = childs.indexOf(socket);

        if (index === -1)
            if (socket === botProcess) botProcess = undefined;
            else childs.splice(index, 1);
    });

    socket.on('error', (err) => {
        console.error(err);
    });
});

process.on('exit', () => {
    console.log("Gracefull exit initiated. shutting down");
});

process.on('uncaughtException', (err) => {
    console.error(err);
});


master.listen(1337, () => console.log("[Master] Started internal master TCP server on port 1337"))