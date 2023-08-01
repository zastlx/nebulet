"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// config.js
exports.default = {
    mysql: {
        host: "localhost",
        user: "root",
        password: "&+YNL4_Uc7d!cU#Y2kTh*QDzsNGc43DVNVQrzYj8Pgzzkb5LTrSdRjqmDtHfe=RfG=$CH",
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
            "68.229.239.153",
            "149.57.28.36",
            "97.119.138.122", // brp
        ],
        masterPort: 1337,
        saltRounds: 10
    }
};
