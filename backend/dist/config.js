"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// config.js
const env_js_1 = __importDefault(require("./env.js"));
exports.default = {
    mysql: {
        host: "localhost",
        user: "root",
        password: env_js_1.default.SQLPASS,
        database: "nebulet",
    },
    server: {
        port: 5173
    },
    oauth: {
        discord: {
            secret: env_js_1.default.SECRET,
            cid: "1131359495302422598"
        }
    },
    security: {
        allowedIps: [
            "184.178.56.82",
            "107.129.31.225",
            "68.229.239.153",
            "98.186.201.17",
            "149.57.28.",
            "2600:1700:3ba0:6ad0:ca94:2ff:fe35:bd93",
            "174.104.208.194",
            "0.0.0.0",
            "127.0.0.1",
            "localhost",
            "::1",
            "::ffff:127.0.0.1",
            "73.185.250.156"
        ],
        masterPort: 1337,
        saltRounds: 10
    },
    vpnCheck: {
        apiKey: 'f308b01e08eb46439805276bea030fb8',
        bypasses: [
            "149.57.28.", // deaf
        ]
    }
};
