"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
class ContractValidatior {
    constructor(rpcLink) {
        this.rpcLink = rpcLink;
        this.web3 = new web3_1.default(new web3_1.default.providers.WebsocketProvider(rpcLink, {
            clientConfig: {
                keepalive: true,
                keepaliveInterval: 60000,
            },
            reconnect: {
                auto: true,
                delay: 5000,
                maxAttempts: 5,
                onTimeout: false,
            },
        }));
    }
    getContract(json, contractAddress) {
        this.contract = new this.web3.eth.Contract(json.abi, contractAddress);
        return this;
    }
    onAllEvents(cb) {
        this.contract.events.allEvents(cb(this)).on("connected", (id) => {
            console.log("connected to ws id=" + id);
        });
        return this;
    }
    onTransfer(cb) {
        this.contract.events.Transfer(cb(this)).on("connected", (id) => {
            console.log("connected to ws id=" + id);
        });
        return this;
    }
    onUnfreeze(cb) {
        this.contract.events.Unfreeze(cb(this)).on("connected", (id) => {
            console.log("connected to ws id=" + id);
        });
        return this;
    }
}
exports.default = (rpcLink) => new ContractValidatior(rpcLink);
//# sourceMappingURL=ContractValidator.js.map