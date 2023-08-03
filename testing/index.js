import express from "express";
import axios from "axios";

const app = express();

global.gitToken = "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";
app.get("/dev", async (req, res) => {
    try {
        const url = 'https://api.github.com/repos/zastlx/nebulet2/contents';
        const response = await axios.get(url, { headers: {
            Authorization: `token ${global.gitToken}`
        } });

        const files = [];

        const processContents = async (contents) => {
            for (const item of contents) {
                if (item.type === 'file') {
                    files.push(item.path);
                } else if (item.type === 'dir') {
                    const subdirUrl = item.url.replace('https://api.github.com/repos', 'https://raw.githubusercontent.com').replace('/contents', '');
                    const subdirResponse = await axios.get(subdirUrl, { headers: {
                        Authorization: `token ${global.gitToken}`
                    } });
                    await processContents(subdirResponse.data);
                }
            }
        };

        await processContents(response.data);
        
        res.json(files);
    } catch (error) {
        res.sendStatus(500);
    }
});

app.get("/*", async (req, res) => {
    try {
        const fileUrl = `https://raw.githubusercontent.com/zastlx/nebulet2/main${req.path === "/" ? "/index.html" : req.path}`;
        const response = await axios.get(fileUrl, { responseType: 'stream', headers: {
            Authorization: `token ${global.gitToken}`
        } });
        
        return response.data.pipe(res);
    } catch (error) {
        res.sendStatus(404);
    }
});



app.listen(6123, () => console.log("Started on 6123"));