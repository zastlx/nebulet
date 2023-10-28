import expressWs from "express-ws";
// never finished

export default async function load(app) {
    expressWs(app);

    app.ws('/ws/', (ws, req) => {
        console.log('client connected');
        ws.on('message', (m) => {
            console.log(m);
        });
    });
}