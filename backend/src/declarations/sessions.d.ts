import { Request } from "express";

interface sRequest extends Request {
    session: {
        id: string;
        lastAccessTime: number;
        [key: string]: any;
    };
}