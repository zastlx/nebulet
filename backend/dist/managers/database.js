"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = require("mysql2");
const config_js_1 = __importDefault(require("../config.js"));
const pool = (0, mysql2_1.createPool)(config_js_1.default.mysql);
exports.default = pool;
