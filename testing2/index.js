const express = require('express');
const {
    v4: uuidv4
} = require('uuid');
const SessionsManager = require('./sm');
const fs = require('fs');
const path = require('path');

const app = express();
const sessionsManager = new SessionsManager();

app.use(express.json());
app.use(sessionsManager.middleWare.bind(sessionsManager));

app.get('/save', (req, res) => {
    sessionsManager.saveAllSessionsToDisk();

    res.send('SVING SESIONS!')
})

app.get("/test2", async (req,res) => {
    await fs.promises.writeFile(path.join(sessionsManager.dir, `${req.session.id}TEST.json`), JSON.stringify(req.session), "utf8");

    res.send('jew');
})

app.get('/user/:sessionId', async (req, res) => {
    let {
        sessionId
    } = req.params;
    if (!sessionId) sessionId = req.session.id;
    const session = await sessionsManager.get(sessionId);

    if (session.err) {
        res.status(404).json({
            message: 'Session not found or expired.'
        });
    } else {
        res.json({
            lastAccessTime: session.lastAccessTime
        });
    }
});

app.get('/user/', async (req, res) => {
   res.send(req.session);
});

app.get("/test", async (req, res) => {
    req.session.test = 'testwork!';

    res.send('sted!')
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});