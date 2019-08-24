module.exports = {
    "extends": "piecioshka",
    "env": {
        // "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": 'module'
    },
    "rules": {
    }
};