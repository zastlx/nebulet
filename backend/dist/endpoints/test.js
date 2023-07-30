"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    methods: ["get"],
    get: (req, res) => {
        req.session.test = "NIGER?";
        res.send(req.session);
    }
};
