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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const web3_1 = __importDefault(require("web3"));
const router_1 = require("./router");
const config_1 = __importDefault(require("./config"));
const web3 = new web3_1.default(config_1.default.rpc);
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use((0, cors_1.default)());
        app.get(`/public/${config_1.default.fileName}`, function (req, res, next) {
            const { sign } = req.query;
            if (!sign)
                return res.sendStatus(400);
            next();
        });
        app.use('/public', express_1.default.static('../public'));
        app.use(body_parser_1.default.json({ limit: "50mb" }));
        app.use(body_parser_1.default.urlencoded({ extended: true }));
        app.set('view engine', 'ejs');
        app.use("/", (0, router_1.txRouter)(web3));
        app.listen(config_1.default.port || 3100, () => {
            console.log(`Listening on port ${process.env.PORT}`);
        });
    });
})();
//# sourceMappingURL=index.js.map