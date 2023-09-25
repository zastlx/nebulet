"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    methods: ["get"],
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.session.user)
            return res.status(401).send("Unauthorized");
        try {
            // THIS IS A DUMMY RESPONSE FOR DEBUG PURPOSES!
            // IT IS NOT REALLY QUESTS (DUH) AND MUST BE CHANGED PRE PRODUCTION
            const quests = {
                daily: [{
                        name: 'Open 10 Packs',
                        type: 'Easy',
                        unlocked: true
                    }, {
                        name: 'Open 25 Packs',
                        type: 'Medium',
                        unlocked: false
                    }, {
                        name: 'Complete 10 Plaza Offers',
                        type: 'Hard',
                        unlocked: false
                    }],
                weekly: [{
                        name: 'Send 500 messages.',
                        type: 'Medium',
                        unlocked: true
                    }, {
                        name: 'Complete 12 Daily Quests',
                        type: 'Hard',
                        unlocked: false
                    }, {
                        name: 'Spend over 12 hours on the game',
                        type: 'Impossible',
                        unlocked: false
                    }],
                resets: {
                    daily: 'Tonight at 8PM',
                    weekly: 'Every Saturday, 8PM'
                }
            };
            return res.status(200).send(quests);
        }
        catch (e) {
            console.error(e);
            return res.status(500).send("Interal Server Error");
        }
    })
};
