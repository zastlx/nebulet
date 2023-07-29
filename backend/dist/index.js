"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
/* eslint-enable */
const initRoutes_js_1 = __importDefault(require("./utils/initRoutes.js"));
const config_js_1 = __importDefault(require("./config.js"));
const initMiddlewares_js_1 = __importDefault(require("./utils/initMiddlewares.js"));
const app = (0, express_1.default)();
const viteAppProxyMiddleware = (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: "http://localhost:6009",
    changeOrigin: true,
});
app.set("trust proxy", 1);
app.use((req, res, next) => {
    if (req.path.startsWith("/api"))
        return next();
    viteAppProxyMiddleware(req, res, next);
});
(0, initMiddlewares_js_1.default)(path_1.default.join(__dirname, "/middlewares"), app);
(0, initRoutes_js_1.default)(path_1.default.join(__dirname, "/endpoints"), app);
app.listen(config_js_1.default.server.port);
