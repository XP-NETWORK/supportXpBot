"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env" });
function getOrThrow(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing env var ${key}`);
    }
    return value;
}
exports.default = {
    contractAddress: getOrThrow('CONTRACT'),
    redirect_url: getOrThrow('REDIRECT_URL'),
    rpc: getOrThrow('RPC'),
    port: getOrThrow('PORT'),
    fileName: getOrThrow('FILE_NAME'),
    messageToSign: getOrThrow('MESSAGE_TO_SIGN'),
    tokenList: Array.from(Array(Number(getOrThrow('TOKENS_NUMBER'))).keys()),
    bot: getOrThrow('BOT_TOKEN'),
};
//# sourceMappingURL=config.js.map