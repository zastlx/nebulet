"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    methods: ["get"],
    get: (req, res) => {
        console.log(req.params);
    }
};
