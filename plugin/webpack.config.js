const webpack = require('webpack');
const {ContainerPlugin} = require('webpack').container;

module.exports = {
    entry: './src/index.js',
    target: 'web',
    mode: 'development',
    plugins: [
        new ContainerPlugin({
            name: 'myAwesomePlugin',
            filename: 'remoteEntry.js',
            exposes: {
                './plugin1': './src/plugin1',
                './plugin2': './src/plugin2'
            },
            library: {
                type: 'system',
            },
        }),
    ],
    devServer: {
        port: 9001,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:9000'
        }
    },
};
