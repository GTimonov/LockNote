var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    let TEST_SERVER = 'true';

    return {
        entry: [
             'babel-polyfill',             
            './client/index.js'
        ],

        output: {
            path: __dirname + '/public',
            chunkFilename: '[name].bundle.js',
            filename: 'bundle.js'
        },

        module: {
            rules: [{
                    test: /\.jsx?$/,
                    exclude: /(node_modules|public\/)/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: [{
                            loader: "style-loader" // creates style nodes from JS strings

                        },
                        {
                            loader: "css-loader" // translates CSS into CommonJS
                        },
                        {
                            loader: "sass-loader" // compiles Sass to CSS
                        }
                    ]
                },
                {
                    test: /\.(jpg|png)$/,

                    use: [{
                        loader: 'url-loader',
                        options: {
                            // name: '[name].[ext]',
                            // outputPath: 'images/', 
                            limit: 10000
                        }
                    }]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }]
                },
                // {
                //     test: /\.js$/,
                //     use: ["source-map-loader"],
                //     enforce: "pre"
                // }
            ]
        },
        resolve: {
            extensions: ['.json', '.js', '.jsx']
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './client/index.html',
                inject: "body"
            }),
            new webpack.ProvidePlugin({
                React: 'react',
            }),
            new webpack.EnvironmentPlugin({
                TEST_SERVER: TEST_SERVER,
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    };
};