export interface User {
    id: number;
    username: string;
    discord: string;
    password: string;
    created: Date;
    avatar: string;
    badges: string[];
    banner: string;
    blooks: {
        [key: string]: number;
    }
    shards: number;
    role: string;
    color: string;
    exp: number;
    stats: {
        uniqueBlooks: number,
        messagesSent: number,
        completedTrades: number,
        succesfulOffers: number,
        expeditions: number
    };
    friends: string[];
    achievements: string[];
    blocks: string[]
    ip: string;
    claimed: number;
    punishments: Punishment[],
    settings: {
        [key: string]: boolean
    };
}

export interface Punishment {
    active: boolean;
    staff: string;
    reason: string;
    expires: Date;
}