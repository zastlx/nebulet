// config.js
export default {
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
            "184.178.56.82", // zastix - 1
	        "107.129.31.225", // zastix - 2
            "68.229.239.153", // zastix - 3
            "149.57.28.", // deaf
            "97.119.138.122", // brp
            "74.98.231.200", // penguin
            "184.88.37.109" // unbloocked
        ],
        masterPort: 1337,
        saltRounds: 10
    }
};
