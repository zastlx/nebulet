// config.js
export default {
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
            "184.178.56.82", // zastix - 1
	    "107.129.31.225", // zastix - 2
            "149.57.28.204", // deaf
            "149.57.28.46", // deaf again
	    "174.104.208.194" // xort
        ],
        masterPort: 1337
    }
};
