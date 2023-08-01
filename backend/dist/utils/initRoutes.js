"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function setupRoutes(dir, app, baseRoute = "") {
    const files = fs_1.default.readdirSync(dir, { withFileTypes: true });
    files.forEach((file) => {
        const filePath = path_1.default.join(dir, file.name);
        if (file.isDirectory()) {
            // Check if there's an index.ts file in the folder
            const indexPath = path_1.default.join(filePath, "index.js");
            if (fs_1.default.existsSync(indexPath)) {
                const indexRoute = path_1.default.join("/", baseRoute, file.name);
                const route = require(indexPath).default;
                const methods = route.methods;
                methods.forEach((method) => {
                    app[method](`/api${indexRoute}`, route[method]);
                });
            }
            else {
                setupRoutes(filePath, app, path_1.default.join(baseRoute, file.name));
            }
        }
        else {
            const fileRoute = path_1.default.join("/", baseRoute, file.name.split(".")[0]);
            const route = require(filePath).default;
            const methods = route.methods;
            methods.forEach((method) => {
                app[method](`/api${fileRoute}`, route[method]);
            });
        }
    });
}
exports.default = setupRoutes;
