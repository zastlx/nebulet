"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const config_js_1 = __importDefault(require("../config.js"));
const pool = (0, promise_1.createPool)(config_js_1.default.mysql);
exports.default = pool;
