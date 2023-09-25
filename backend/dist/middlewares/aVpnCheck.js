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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config"));
let template = (header, body, pageTitle) => `
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

        .header {
            font-family: titan one;
            font-size: 50px;
            text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.7);
        }

        .body {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: auto;
        }

        .text {
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
    <title>${pageTitle} | Nebulet</title>
</head>

<body>
    <div class="mainContainer">
        <div class="header">${header}</div>
        <div class="body">
            <p class="text">${body}</p>
        </div>
    </div>
    <div class="blooksBg"></div>

    <script>
        fetch('/api/fingerprint').then(r => r.text()).then(r => {
            if (r === 'Allowed.') location.pathname = '/';
            else {
                document.querySelector('.header').innerText = 'Not Allowed';
                document.querySelector('.text').innerText = 'The IP ' + r + ' cannot be validated. Please turn off your VPN to continue.';
                document.title = 'Not Allowed | Nebulet';
            }
        });
    </script>
</body>
`;
let whitelist = [];
let blacklist = [];
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (config_1.default.vpnCheck.bypasses.some(allowedIp => req.ip.startsWith(allowedIp)))
        return next();
    if (whitelist.includes(req.ip))
        return next();
    if (blacklist.includes(req.ip))
        return res.send(template('Not Allowed', 'You are using a VPN/Proxy and hence cannot access Nebulet.', 'IP Denied'));
    if (req.path.includes('api/fingerprint')) {
        axios_1.default.get(`https://vpnapi.io/api/${req.ip}?key=${config_1.default.vpnCheck.apiKey}`).then((r) => {
            if (r.data.security.vpn || r.data.security.proxy || r.data.security.tor || r.data.security.relay) {
                blacklist.push(req.ip);
                res.send(r.data.ip);
            }
            else {
                whitelist.push(req.ip);
                res.send(`Allowed.`);
            }
        }).catch(err => console.log(err));
    }
    else if (req.path.startsWith('/fingerprint'))
        res.send(template('Loading...', 'We are working internally to check your connection.', 'Fingerprint'));
    else
        res.redirect('/fingerprint');
});
