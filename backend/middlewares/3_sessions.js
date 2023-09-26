import sessionsManager from "../managers/sessions.js";

export default (req, res, next) => {
    sessionsManager.middleWare.bind(sessionsManager)(req, res, next);
}