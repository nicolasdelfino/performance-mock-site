module.exports = {
    "plugins": ["prettier"],
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'extends': ['eslint:recommended', "plugin:react/recommended", "plugin:prettier/recommended"],
    'globals': {
        "axios": true,
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        "sourceType": "module"
    }
};