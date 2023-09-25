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

type packRow = RowDataPacket & {
    name: string;
    level: number;
    price: number;
    image: string;
    background: string;
    blooks: string;
}

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

type blacklistRow = RowDataPacket & {
    ip: string;
    note: string;
    reason: string;
}

type plazaRow = RowDataPacket & {
    id: string;
    offer: string;
    type: string;
    seller: string;
    buyer: string;
    bought: string;
}