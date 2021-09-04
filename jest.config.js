module.exports = {
    "roots": [
        "./test"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(js)",
        "**/?(*.)+(spec|test).+(js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
}