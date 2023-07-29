"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_js_1 = __importDefault(require("../config.js"));
exports.default = (req, res, next) => {
    if (!config_js_1.default.security.allowedIps.includes(req.ip))
        return res.send("me no hablo esplano");
    next();
};
