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
exports.isOwner = void 0;
var fs = require('fs');
const config_1 = __importDefault(require("./config"));
const contractAddr = config_1.default.contractAddress;
const parsed = JSON.parse(fs.readFileSync('./src/constants/abi.json'));
function isOwner(account, web3) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const contract = new web3.eth.Contract(parsed, contractAddr);
            const bals = yield contract.methods.balanceOfBatch(new Array(config_1.default.tokenList.length).fill(account), config_1.default.tokenList).call();
            const nftIdx = bals.findIndex((b) => Number(b) > 0);
            console.log(nftIdx);
            return nftIdx > -1 ? true : false;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    });
}
exports.isOwner = isOwner;
//# sourceMappingURL=helpers.js.map