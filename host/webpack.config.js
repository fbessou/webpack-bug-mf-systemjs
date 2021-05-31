const path = require('path')
const webpack = require('webpack');

module.exports = configuration = {
    entry: './src/index.js',
    target: 'web',
    mode: 'development',
    devServer: {
        port: 9000,
    },
};
