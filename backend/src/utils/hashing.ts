import { hash, compare } from "bcrypt";
import crypto from "node:crypto";
import config from "../config";

const bcrypt = {
    hash: async (string: string) => {
        return await hash(string, config.security.saltRounds);
    },
    compare: async (string: string, hash: string) => {
        return await compare(string, hash);
    }
}

const md5 = {
    hash: (string: string) => {
        return crypto.createHash('md5').update(string).digest('hex');
    },

    compare: function (string: string, hash: string) {
        return this.hash(string) === hash;
    }
}

export {
    md5,
    bcrypt
}