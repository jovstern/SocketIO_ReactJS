var webpack = require('webpack');

module.exports = {
    entry: "./app-client.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                loader: 'babel-loader',
                exclude: /(node_modules|app-server.js)/,
                query: {
                    presets: ['env']
                }
            }
        ]
    }
};