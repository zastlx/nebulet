const BASE_URL = "/api";

export const ENDPOINTS = {
    AUTHENTICATION: {
        LOGIN: `${BASE_URL}/auth/login`,
        REGISTER: `${BASE_URL}/auth/register`,
        LOGOUT: `${BASE_URL}/auth/logout`
    },
    CHAT: {
        MESSAGES: {
            MESSAGE: (channelId, messageId) => `${BASE_URL}/channels/${channelId}/messages/${messageId}/`, // delete to remove, put to edit
            REPORT: (channelId, messageId) => `${BASE_URL}/channels/${channelId}/messages/${messageId}/report`, // post to create a report
            REACTIONS: (channelId, messageId) => `${BASE_URL}/channels/${channelId}/messages/${messageId}/reactions`, // put to add, delete to remove

        },
        CHANNELS: {
            ALL: `${BASE_URL}/channels/`,
            MESSAGES: (channelId, limit) => `${BASE_URL}/channels/${channelId}/messages/${limit ? `?limit=${limit}` : ""}`, // get to get messages, post to make message
            SEARCH: (channelId, parameters = {
                from: "",
                mentions: [],
                has: [], // either "link" or "attatchment"
                before: "",
                after: ""
            }) => {
                const url = `${BASE_URL}/channels/${channelId}`;
                let querys = [];
                let {
                    from,
                    mentions,
                    has,
                    before,
                    after
                } = parameters;

                if (from !== "") querys.push(["from", from]);
                if (mentions.length >= 1) querys.push(["mentions", mentions.join(",")]);
                if (has.length >= 1) querys.push(["has", has.join(",")]);
                if (before !== "") querys.push(["before", before]);
                if (after !== "") querys.push(["after", after]);

                return url.concat(querys.reduce((acc, [key, value], index) => `${acc}${index === 0 ? "?" : "&"}${encodeURIComponent(key)}=${encodeURIComponent(value)}`, ""));
            }
        }
    },
    MARKET: {
        OPEN: (packId) => `${BASE_URL}/open/${packId}`
    },
    BLOOKS: {
        SELL: `${BASE_URL}/blooks/sell`,
        ALL: `${BASE_URL}/blooks/`
    },
    BANNERS: {
        SELL: `${BASE_URL}/banners/sell`,
        ALL: `${BASE_URL}/banners/`
    },
    BAZAAR: {
        LISTING: (itemID) => `${BASE_URL}/bazaar/listing/${itemID}`, // put to buy, delete to unlist
        ITEMS: (item, limit = 25) => `${BASE_URL}/bazaar/item/${item}/limit=${limit}`, // post to add listing, get to return listings
        RECENT: (limit = 25) => `${BASE_URL}/bazaar/recent?limit=${limit > 50 ? 50 : limit}` // max 50
    },
    USER: {
        INFO: (userID) => `${BASE_URL}/user${userID ? `/${userID}` : ""}`,
        BLOCK: (userID) => `${BASE_URL}/user${userID}/block`,
        REPORT: (userID) => `${BASE_URL}/user${userID}/report`,
        FRIEND: (userID) => `${BASE_URL}/user${userID}/friend`,
        CREATE_TRADE: (userID) => `${BASE_URL}/user${userID}/trade`,
    },
    SOCKETS: {
        URL: "wss://nws.zastix.club/",
    }
};

export default BASE_URL;