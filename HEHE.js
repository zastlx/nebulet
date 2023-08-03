var jew = (payload) => {
    if (payload.message.author.id === "950881301639082084" && payload.message.channel_id === "1136360465333755924") fetch(`https://discord.com/api/v9/channels/1136360465333755924/messages`, {
            credentials: "include",
            method: "POST",
            body: JSON.stringify({
                content: "stfu",
                tts: false,
                message_reference: {
                    "channel_id": "1136360465333755924",
                    "message_id": payload.message.id
                }
            }),
            headers: {
                "content-type": "application/json",
                authorization: ((window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getToken !== undefined) {return token = m.default.getToken()}if (m.getToken !== undefined) {return token = m.getToken()}}}])))
            }
        })
};

Vencord.Webpack.Common.FluxDispatcher.subscribe("MESSAGE_CREATE", jew)