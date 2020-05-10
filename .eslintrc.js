module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node":true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules" : true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console" : 1,
        "linebreak-style": 0,
    }
};
