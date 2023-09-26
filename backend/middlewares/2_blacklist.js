import pool from "../managers/database.js";
import { md5 } from "../utils/hashing.js";

export default async (req, res, next) => {
    let hashedIp = md5.hash(req.ip);

    let blacklisted = (await pool.query("SELECT * FROM blacklist WHERE ip = ?", [ hashedIp ]))[0];
    if (blacklisted.length > 0 && (req.path === '/blacklisted' || req.path === '/blacklisted/')) res.send(`
        <head>
            <style>
                @import url('https://fonts.googleapis.com/css?family=Nunito:400,700|Titan+One');

                html {
                    width: 100% !important;
                    height: 100% !important;
                }
                  
                body {
                    font-family: nunito;
                    background-image: linear-gradient(45deg, rgb(25, 56, 215) 0%, rgb(154, 28, 203) 100%);
                    overflow-x: hidden;
                    overflow-y: scroll;
                    background-attachment: fixed;
                    background-position: center;
                    background-repeat: no-repeat;
                    height: 100vh;
                }
                  
                body::-webkit-scrollbar {
                    display: none;
                }
                  
                .blooksBg {
                    position: fixed;
                    background-image: url(https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png);
                    top: 0;
                    left: 0;
                    overflow: hidden;
                    background-attachment: fixed;
                    background-position: center;
                    height: 100vh;
                    width: 100%;
                    opacity: 0.1;
                    z-index: -2;
                }

                .mainContainer {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: rgba(82, 3, 84, 0.7);
                    border-radius: 10px;
                    box-shadow: inset 0 -9px rgba(0, 0, 0, 0.2), 0 5px rgba(0, 0, 0, 0);
                    width: 70vw;
                    padding: 30px 10px;
                    display: flex;
                    justify-content: center;
                    flex-flow: column;
                    text-align: center;
                    color: white;
                }

                .blacklistHeader {
                    font-family: titan one;
                    font-size: 50px;
                    text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.7);
                }

                .blacklistBody {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: auto;
                }

                .blacklistText {
                    font-size: 25px;
                }

                @media only screen and (max-width: 600px) {
                    .mainContainer {
                        width: 90vw;
                    }
                }
            </style>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>Blacklisted | Nebulet</title>
        </head>

        <body>
            <div class="mainContainer">
                <div class="blacklistHeader">Blacklisted</div>
                <div class="blacklistBody">
                    <p class="blacklistText">You are currently blacklisted from Nebulet with reason:<br><b class="blacklistReason">${blacklisted[0].reason}</b></p>
                </div>
            </div>
            <div class="blooksBg"></div>
        </body>
    `)
    else if (blacklisted.length > 0) res.redirect('/blacklisted');
    else next();
};