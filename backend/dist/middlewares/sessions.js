"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sessions_1 = __importDefault(require("../managers/sessions"));
exports.default = (req, res, next) => {
    sessions_1.default.middleWare.bind(sessions_1.default)(req, res, next);
};
