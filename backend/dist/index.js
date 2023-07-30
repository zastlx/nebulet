"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
/* eslint-enable */
const initRoutes_js_1 = __importDefault(require("./utils/initRoutes.js"));
const config_js_1 = __importDefault(require("./config.js"));
const initMiddlewares_js_1 = __importDefault(require("./utils/initMiddlewares.js"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.set("trust proxy", 1);
(0, initMiddlewares_js_1.default)(path_1.default.join(__dirname, "/middlewares"), app);
(0, initRoutes_js_1.default)(path_1.default.join(__dirname, "/endpoints"), app);
app.listen(config_js_1.default.server.port);
