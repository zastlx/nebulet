"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// config.js
exports.default = {
    mysql: {
        host: "localhost",
        user: "root",
        password: "",
        database: "nebulet",
    },
    server: {
        port: 5173
    },
    oauth: {
        discord: {
            secret: "Ox0ppcOOEtRssk4QV6RTBtOaQqN5KrdM",
            cid: "1131359495302422598"
        }
    },
    security: {
        allowedIps: [
            "184.178.56.82",
            "107.129.31.225",
            "149.57.28.204",
            "149.57.28.46",
            "174.104.208.194" // xort
        ],
        masterPort: 1337
    }
};
