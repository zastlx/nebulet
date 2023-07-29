import { ENDPOINTS } from "../constants/endpoints";
import APIManager from "../services/apiManager";
import userStore from "../stores/UserStore";

// TEMP: pls fix later and make not shit
/*
const reportReasons = {
    cyberCriminal: {
        dox: "REPORT_CYBERCRIMINAL_DOXXING",
        ddos: "REPORT_CYBERCRIMINAL_DDOSING",
        accountStealing: "REPORT_CYBERCRIMINAL_STEALING",
        etc: "REPORT_CYBERCRIMINAL_OTHER"
    },
    abuse: {
        minorExploitation: "REPORT_ABUSE_PEDO",
        discrimination: "REPORT_ABUSE_DISCRIMINATION",
        threatening: "REPORT_ABUSE_THREATENING",
        harrassing: "REPORT_ABUSE_HARRASSMENT"
    },
    selfHarm: {
        selfHarm: "REPORT_SELFHARM_SELFHARM",
        harmPromotion: "REPORT_SELFHARM_PROMOTION"
    },
    underaged: "REPORT_UNDERAGED",
    nsfw: "REPORT_NSFW",
    iDontKnowWhatToNameThisObject: {
        scamming: {
            trade: "REPORT_IDK_SCAMMING_TRADE",
            account: "REPORT_IDK_SCAMMING_ACCOUNT",
            crossTrading: "REPORT_IDK_SCAMMING_CROSS" // like jesus
        },
        impersonation: "REPORT_IDK_IMPOSTER"
    },
    alts: "REPORT_ALTS",
    spam: "REPORT_SPAM"
};
*/

export default class Message {
    id;
    channelId;
    author;
    content;
    created;
    mentions;
    attachments;
    edited;
    embeds;
    reactions;
    repliedTo;

    constructor(initValue) {
        this.id = initValue.id;
        this.channelId = initValue.channelId;
        this.author = initValue.author;
        this.content = initValue.content;
        this.created = initValue.created;
        this.mentions = initValue.mentions;
        this.attachments = initValue.mentions;
        this.edited = initValue.mentions;
        this.embeds = initValue.mentions;
        this.reactions = initValue.mentions;
        this.repliedTo = initValue.repliedTo;
    }

    update(newProps) {
        Object.assign(this, {
            ...this,
            ...newProps
        });
    }

    async reply(message) {
        const response = await APIManager.put(ENDPOINTS.CHAT.MESSAGE(this.channelId, this.id), {
            content: message,
            repliedTo: this.id
        });
        const { data, status } = response;

        switch (status) {
            case 401:
                throw { status, data };
            case 200:
                return data;
            default:
                throw new Error("[message] recived unkonwn status code");
        }
    }

    getAuthor() {
        return userStore.getUser(this.author);
    }

    async edit(newContent) {
        const response = await APIManager.put(ENDPOINTS.CHAT.MESSAGE(this.channelId, this.id), {
            content: newContent
        });
        const { data, status } = response;

        switch (status) {
            case 401:
                throw { status, data };
            case 200:
                return data;
            default:
                throw new Error("[message] recived unkonwn status code");
        }
    } // message from you only

    async delete() {
        const response = await APIManager.delete(ENDPOINTS.CHAT.MESSAGE(this.channelId, this.id));
        const { data, status } = response;

        switch (status) {
            case 401:
                throw { status, data };
            case 200:
                return data;
            default:
                throw new Error("[message] recived unkonwn status code");
        }
    } // message from you or any1 if u got perms (helper+)
    
    async react(emoji) {
        const response = await APIManager.post(ENDPOINTS.CHAT.REACTIONS(this.channelId, this.id), {
            emoji
        });
        const { data, status } = response;

        switch (status) {
            case 401:
                throw { status, data };
            case 200:
                return data;
            default:
                throw new Error("[message] recived unkonwn status code");
        }
    } // emoji name (in between the ::)
    // this is gonna be so good fr

    async report(reason, desc) {
        const response = await APIManager.post(ENDPOINTS.CHAT.REPORT(this.channelId, this.id), {
            reason, // will be somthing in repotReasons
            comment: desc
        });
        const { data, status } = response;

        switch (status) {
            case 401:
                throw { status, data };
            case 200:
                return data;
            default:
                throw new Error("[message] recived unkonwn status code");
        }
    } // right click --> report
}
// markdown: bolding, italics, strike, underline, code