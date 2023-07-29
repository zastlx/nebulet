import net from 'net';

const socket = new net.Socket();

const host = 'localhost';
const port = 1337;

socket.connect(port, host, () => {
    console.log('Connected to TCP/IP server');

    socket.write(JSON.stringify({
        type: "init",
        identifer: "child"
    }) + "\n");
});

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
            } catch (err) {
                console.error('Error parsing message:', err);
            }
        }
    }

    partialData = messages[messages.length - 1];
});

socket.on('close', () => {
    console.log('Socket connection closed');
});