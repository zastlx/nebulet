import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

console.log("__filename:", __filename);
console.log("__dirname:", __dirname);