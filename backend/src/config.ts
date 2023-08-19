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
            "68.229.239.153", // zastix - 3
            "98.186.201.17", // zastix - 4
            "104.245.146.", // deaf
            "97.119.138.122", // brp
            "97.119.173.145", // brp - 2
            "74.98.231.200", // penguin
            "184.88.37.109", // unbloocked
            "99.11.234.125", // shizuko
            "174.104.208.194", // xot
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
