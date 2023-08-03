"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bcrypt = exports.md5 = void 0;
const bcrypt_1 = require("bcrypt");
const node_crypto_1 = __importDefault(require("node:crypto"));
const config_1 = __importDefault(require("../config"));
const bcrypt = {
    hash: (string) => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, bcrypt_1.hash)(string, config_1.default.security.saltRounds);
    }),
    compare: (string, hash) => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, bcrypt_1.compare)(string, hash);
    })
};
exports.bcrypt = bcrypt;
const md5 = {
    hash: (string) => {
        return node_crypto_1.default.createHash('md5').update(string).digest('hex');
    },
    compare: function (string, hash) {
        return this.hash(string) === hash;
    }
};
exports.md5 = md5;
