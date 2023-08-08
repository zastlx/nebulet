import { RowDataPacket } from "mysql2";
import { User } from "./user";

type userRow = RowDataPacket & User;

type resultCount = RowDataPacket & { count: number };

type blookRow = RowDataPacket & {
    name: string;
    displayName: string;
    image: string;
    rarity: string;
    pack: string;
    price: number;
    chance: number;
};

type bannerRow = RowDataPacket & {
    name: string;
    displayName: string;
    image: string;
};

type channelRow = RowDataPacket & {
    id: number;
    name: string;
    type: number;
    description: string;
    botsAllowed: boolean;
    recipients: string[];
    requiredPerms: string[];
    owner: string;
};
