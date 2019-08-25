module.exports = {
    "extends": "piecioshka",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "globals": {
        "Timer": true,
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        // "sourceType": 'module'
    },
    "rules": {
        "no-console": "off",
        "require-jsdoc": "off",
        "no-implicit-globals": "off",
        "no-undef": "off"
    }
};
