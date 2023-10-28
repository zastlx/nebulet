import Error404 from "./errors/404";
import Homepage from "./home";
import Auth from "./auth";
import Terms from "./tos";
import Logout from "./logout";
import Stats from "./stats";
import Leaderboard from "./leaderboard";
import Chat from "./chat";
import Galaxy from "./galaxy";
import Inventory from "./inv";
import Plaza from "./plaza";
import Quests from "./quests";
import Settings from "./settings";
import Credits from "./credits";
import Store from "./store";
import ParticleTest from "./test.jsx";

import Panel from "./panel";
import UserPanel from "./panel/users";

export default {
    errors: {
        error404: Error404
    },
    home: Homepage,
    terms: Terms,
    auth: Auth,
    logout: Logout,
    stats: Stats,
    leaderboard: Leaderboard,
    chat: Chat,
    galaxy: Galaxy,
    inv: Inventory,
    plaza: Plaza,
    quests: Quests,
    settings: Settings,
    credits: Credits,
    store: Store,
    particles: ParticleTest,

    panel: Panel,
    userPanel: UserPanel
};