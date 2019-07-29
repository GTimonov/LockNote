const merge = require('webpack-merge');
const common = require('./webpack.config.js');
var path = require('path');

module.exports = (env) => merge(common(env), {
       mode: 'development',
       devtool: 'eval-source-map',
       devServer: {
            hot: true,
            noInfo: true,
            contentBase: path.join(__dirname, 'public'),
            //host: '0.0.0.0'
        },
});