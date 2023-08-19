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
            "104.245.146.",
            "97.119.138.122",
            "97.119.173.145",
            "74.98.231.200",
            "184.88.37.109",
            "99.11.234.125",
            "174.104.208.194",
            "0.0.0.0",
            "127.0.0.1",
            "localhost",
            "::1",
            "::ffff:127.0.0.1"
        ],
        masterPort: 1337,
        saltRounds: 10
    }
};
