"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_crypto_1 = __importDefault(require("node:crypto"));
class UniqueIDGenerator {
    generate(length = 10) {
        if (length <= 0) {
            throw new Error('Length must be a positive integer');
        }
        const bytes = new Uint8Array(Math.ceil(length / 2));
        node_crypto_1.default.getRandomValues(bytes);
        const id = Array.from(bytes)
            .map((byte) => byte % 10)
            .join('')
            .slice(0, length);
        return id;
    }
}
const idGen = new UniqueIDGenerator();
exports.default = {
    session: () => {
        return node_crypto_1.default.randomBytes(16).toString("hex");
    }
};
