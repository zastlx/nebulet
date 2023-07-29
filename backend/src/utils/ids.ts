import crypto from "node:crypto";

class UniqueIDGenerator {
    generate(length = 10) {
        if (length <= 0) {
            throw new Error('Length must be a positive integer');
        }

        const bytes = new Uint8Array(Math.ceil(length / 2));
        crypto.getRandomValues(bytes);
        const id = Array.from(bytes)
            .map((byte) => byte % 10)
            .join('')
            .slice(0, length);

        return id;
    }
}

const idGen = new UniqueIDGenerator();

export default {
    session: () => {
        return crypto.randomBytes(16).toString("hex");
    }   
}