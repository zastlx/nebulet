"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
exports.default = (req, res, next) => {
    if (!config_1.default.security.allowedIps.some(allowedIp => req.ip.startsWith(allowedIp)))
        return (Math.random() < 0.1 ? res.send("me no hablo esplano") : res.destroy());
    next();
};
