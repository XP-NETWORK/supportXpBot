"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    _format: "hh-sol-cache-2",
    files: {
        "/Users/alexadoniev/www/vlaunch-bridge-master/contracts/Bridge.sol": {
            lastModificationDate: 1641990478361,
            contentHash: "2339018bb417e42e63a6ce0072e44235",
            sourceName: "contracts/Bridge.sol",
            solcConfig: {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: false,
                        runs: 200,
                    },
                    outputSelection: {
                        "*": {
                            "*": [
                                "abi",
                                "evm.bytecode",
                                "evm.deployedBytecode",
                                "evm.methodIdentifiers",
                                "metadata",
                            ],
                            "": ["ast"],
                        },
                    },
                },
            },
            imports: [
                "./WVPAD.sol",
                "@openzeppelin/contracts/access/Ownable.sol",
                "@openzeppelin/contracts/security/Pausable.sol",
                "@openzeppelin/contracts/token/ERC20/IERC20.sol",
                "@openzeppelin/contracts/utils/structs/EnumerableSet.sol",
            ],
            versionPragmas: ["^0.8.0"],
            artifacts: ["Bridge"],
        },
        "/Users/alexadoniev/www/vlaunch-bridge-master/contracts/WVPAD.sol": {
            lastModificationDate: 1641990478361,
            contentHash: "aa36a0e826aa8b7847f81a07151577dd",
            sourceName: "contracts/WVPAD.sol",
            solcConfig: {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: false,
                        runs: 200,
                    },
                    outputSelection: {
                        "*": {
                            "*": [
                                "abi",
                                "evm.bytecode",
                                "evm.deployedBytecode",
                                "evm.methodIdentifiers",
                                "metadata",
                            ],
                            "": ["ast"],
                        },
                    },
                },
            },
            imports: [
                "@openzeppelin/contracts/access/Ownable.sol",
                "@openzeppelin/contracts/token/ERC20/ERC20.sol",
            ],
            versionPragmas: ["^0.8.0"],
            artifacts: ["WVPAD"],
        },
        "/Users/alexadoniev/www/vlaunch-bridge-master/node_modules/@openzeppelin/contracts/access/Ownable.sol": {
            lastModificationDate: 1641993007863,
            contentHash: "8398972af73b4e9e5ff3b31cad86234f",
            sourceName: "@openzeppelin/contracts/access/Ownable.sol",
            solcConfig: {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: false,
                        runs: 200,
                    },
                    outputSelection: {
                        "*": {
                            "*": [
                                "abi",
                                "evm.bytecode",
                                "evm.deployedBytecode",
                                "evm.methodIdentifiers",
                                "metadata",
                            ],
                            "": ["ast"],
                        },
                    },
                },
            },
            imports: ["../utils/Context.sol"],
            versionPragmas: ["^0.8.0"],
            artifacts: ["Ownable"],
        },
        "/Users/alexadoniev/www/vlaunch-bridge-master/node_modules/@openzeppelin/contracts/security/Pausable.sol": {
            lastModificationDate: 1641993007870,
            contentHash: "9c2dccab8e3a43a18c41e358763fe4d8",
            sourceName: "@openzeppelin/contracts/security/Pausable.sol",
            solcConfig: {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: false,
                        runs: 200,
                    },
                    outputSelection: {
                        "*": {
                            "*": [
                                "abi",
                                "evm.bytecode",
                                "evm.deployedBytecode",
                                "evm.methodIdentifiers",
                                "metadata",
                            ],
                            "": ["ast"],
                        },
                    },
                },
            },
            imports: ["../utils/Context.sol"],
            versionPragmas: ["^0.8.0"],
            artifacts: ["Pausable"],
        },
        "/Users/alexadoniev/www/vlaunch-bridge-master/node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol": {
            lastModificationDate: 1641993009137,
            contentHash: "302d9755e46bc69d7058b0cbe7185e37",
            sourceName: "@openzeppelin/contracts/token/ERC20/IERC20.sol",
            solcConfig: {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: false,
                        runs: 200,
                    },
                    outputSelection: {
                        "*": {
                            "*": [
                                "abi",
                                "evm.bytecode",
                                "evm.deployedBytecode",
                                "evm.methodIdentifiers",
                                "metadata",
                            ],
                            "": ["ast"],
                        },
                    },
                },
            },
            imports: [],
            versionPragmas: ["^0.8.0"],
            artifacts: ["IERC20"],
        },
        "/Users/alexadoniev/www/vlaunch-bridge-master/node_modules/@openzeppelin/contracts/utils/structs/EnumerableSet.sol": {
            lastModificationDate: 1641993009149,
            contentHash: "b8070bbbb327a49a4d37f5c590b38238",
            sourceName: "@openzeppelin/contracts/utils/structs/EnumerableSet.sol",
            solcConfig: {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: false,
                        runs: 200,
                    },
                    outputSelection: {
                        "*": {
                            "*": [
                                "abi",
                                "evm.bytecode",
                                "evm.deployedBytecode",
                                "evm.methodIdentifiers",
                                "metadata",
                            ],
                            "": ["ast"],
                        },
                    },
                },
            },
            imports: [],
            versionPragmas: ["^0.8.0"],
            artifacts: ["EnumerableSet"],
        },
        "/Users/alexadoniev/www/vlaunch-bridge-master/node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol": {
            lastModificationDate: 1641993009137,
            contentHash: "f48de0eaae9544072b8766e2eac528a7",
            sourceName: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
            solcConfig: {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: false,
                        runs: 200,
                    },
                    outputSelection: {
                        "*": {
                            "*": [
                                "abi",
                                "evm.bytecode",
                                "evm.deployedBytecode",
                                "evm.methodIdentifiers",
                                "metadata",
                            ],
                            "": ["ast"],
                        },
                    },
                },
            },
            imports: [
                "./IERC20.sol",
                "./extensions/IERC20Metadata.sol",
                "../../utils/Context.sol",
            ],
            versionPragmas: ["^0.8.0"],
            artifacts: ["ERC20"],
        },
        "/Users/alexadoniev/www/vlaunch-bridge-master/node_modules/@openzeppelin/contracts/utils/Context.sol": {
            lastModificationDate: 1641993007870,
            contentHash: "5f2c5c4b6af2dd4551027144797bc8be",
            sourceName: "@openzeppelin/contracts/utils/Context.sol",
            solcConfig: {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: false,
                        runs: 200,
                    },
                    outputSelection: {
                        "*": {
                            "*": [
                                "abi",
                                "evm.bytecode",
                                "evm.deployedBytecode",
                                "evm.methodIdentifiers",
                                "metadata",
                            ],
                            "": ["ast"],
                        },
                    },
                },
            },
            imports: [],
            versionPragmas: ["^0.8.0"],
            artifacts: ["Context"],
        },
        "/Users/alexadoniev/www/vlaunch-bridge-master/node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
            lastModificationDate: 1641993010013,
            contentHash: "909ab67fc5c25033fe6cd364f8c056f9",
            sourceName: "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol",
            solcConfig: {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: false,
                        runs: 200,
                    },
                    outputSelection: {
                        "*": {
                            "*": [
                                "abi",
                                "evm.bytecode",
                                "evm.deployedBytecode",
                                "evm.methodIdentifiers",
                                "metadata",
                            ],
                            "": ["ast"],
                        },
                    },
                },
            },
            imports: ["../IERC20.sol"],
            versionPragmas: ["^0.8.0"],
            artifacts: ["IERC20Metadata"],
        },
        "/Users/alexadoniev/www/vlaunch-bridge-master/contracts/DummyErc20.sol": {
            lastModificationDate: 1641990478360,
            contentHash: "abc53e5dc7b88a97b775f7798105d23f",
            sourceName: "contracts/DummyErc20.sol",
            solcConfig: {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: false,
                        runs: 200,
                    },
                    outputSelection: {
                        "*": {
                            "*": [
                                "abi",
                                "evm.bytecode",
                                "evm.deployedBytecode",
                                "evm.methodIdentifiers",
                                "metadata",
                            ],
                            "": ["ast"],
                        },
                    },
                },
            },
            imports: ["@openzeppelin/contracts/token/ERC20/ERC20.sol"],
            versionPragmas: ["^0.8.0"],
            artifacts: ["DummyErc20"],
        },
    },
};
//# sourceMappingURL=solidity-files-cache.js.map