const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env) => merge(common(env), {
    mode: 'production',
    optimization: {
        minimize: true
    },
    output: {
        path: __dirname + '/public',
        chunkFilename: '[name].bundle.[contenthash].js',
        filename: 'bundle.[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
    ]
});