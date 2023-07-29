"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
/* eslint-disable */
function setupRoutes(dir, app, baseRoute = "") {
    const files = fs_1.default.readdirSync(dir, {
        withFileTypes: true
    });
    files.forEach((file) => {
        const filePath = path_1.default.join(dir, file.name);
        if (file.isDirectory())
            return setupRoutes(filePath, app, path_1.default.join(baseRoute, file.name));
        const fileRoute = path_1.default.join("/", baseRoute, file.name.split(".")[0]);
        const route = require(filePath).default;
        const methods = route.methods;
        methods.forEach((method) => {
            app[method](`/api${fileRoute}`, route[method]);
        });
    });
}
exports.default = setupRoutes;
;
/* eslint-enable */ 
