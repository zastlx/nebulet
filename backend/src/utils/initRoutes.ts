import path from "path";
import fs from "fs";
import {
    Application
} from "express";

type methods = Array <"get" | "post" | "patch" | "delete" | "put"> ;

/* eslint-disable */
export default function setupRoutes(dir: string, app: Application, baseRoute: string = "") {
    const files = fs.readdirSync(dir, {
        withFileTypes: true
    });

    files.forEach((file) => {
        const filePath = path.join(dir, file.name);

        if (file.isDirectory()) return setupRoutes(filePath, app, path.join(baseRoute, file.name));
        const fileRoute = path.join("/", baseRoute, file.name.split(".")[0]);

        const route = require(filePath).default;

        const methods: methods = route.methods;

        methods.forEach((method) => {
            app[method](`/api${fileRoute}`, route[method]);
        });
    });
};
/* eslint-enable */