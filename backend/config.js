// config.js
import env from "./env.js";

export default {
    mysql: {
        host: "localhost",
        user: "root",
        password: env.SQLPASS,
        database: "nebulet",
    },
    server: {
        port: 5173
    },
    oauth: {
        discord: {
            secret: env.SECRET,
            cid: "1131359495302422598"
        }
    },
    security: {
        allowedIps: [
            "184.178.56.82", // zastix - 1
	        "107.129.31.225", // zastix - 2
            "68.229.239.153", // zasatix - 3
            "98.186.201.17", // zastix - 4
            "146.70.68.", // deaf
            // "2600:1700:3ba0:6ad0:ca94:2ff:fe35:bd93", // monkey man v6
            // "174.104.208.194", // xort man
            "0.0.0.0",
            "127.0.0.1",
            "localhost",
            "::1",
            "::ffff:127.0.0.1"
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
