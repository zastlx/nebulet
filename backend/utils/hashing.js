import { hash, compare } from "bcrypt";
import crypto from "node:crypto";
import config from "../config.js";

const bcrypt = {
    hash: async (string) => {
        return await hash(string, config.security.saltRounds);
    },
    compare: async (string, hash) => {
        return await compare(string, hash);
    }
}

const md5 = {
    hash: (string) => {
        return crypto.createHash('md5').update(string).digest('hex');
    },

    compare: function (string, hash) {
        return this.hash(string) === hash;
    }
}

export {
    md5,
    bcrypt
}