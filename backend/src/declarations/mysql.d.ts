import { RowDataPacket } from "mysql2";
import { User } from "./user";

type UserRow = RowDataPacket & User;

type resultCount = RowDataPacket & { count: number };

type blookRow = RowDataPacket & {
    name: string
    displayName: string
    image: string;
    rarity: string;
    pack: string;
    price: number;
    chance: number;
};