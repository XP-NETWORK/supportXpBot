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
exports.txRouter = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const config_1 = __importDefault(require("./config"));
const txRouter = (web3) => {
    const router = (0, express_1.Router)();
    router.post("/update", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body, 'body');
        const { message: { text, chat: { id } } } = req.body;
        try {
            console.log(text);
            if (text === '/start startwithxpbot') {
                yield axios_1.default.get(`https://api.telegram.org/bot${config_1.default.bot}/sendMessage?chat_id=${id}&text=${'<a>koresh</a>'}&parse_mode=HTML`);
            }
            //res.render('../../src/views/home', {message: config.messageToSign, secret: config.contractAddress});
            res.end();
            //res.json({hi: 'guy'})
        }
        catch (e) {
            console.log(e);
            res.status(500).json({ message: e.toString() });
        }
    }));
    //https://t.me/techSupTest_bot?start=startwithxpbot
    return router;
};
exports.txRouter = txRouter;
//# sourceMappingURL=router.js.map