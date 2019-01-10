var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    let STUDENT_MODE = 'true';
    let TEST_MODE = 'true';
    let PROVIDER = 'LTI';

    if (env){
        if (env.STUDENT_MODE)
            STUDENT_MODE = env.STUDENT_MODE;
        if (env.TEST_MODE)
            TEST_MODE = env.TEST_MODE;
        if (env.PROVIDER)
            PROVIDER = env.PROVIDER;
    }
  
    console.log('STUDENT_MODE : '+ STUDENT_MODE);
    console.log('TEST_MODE : '+ TEST_MODE);
    console.log('PROVIDER : '+ PROVIDER);

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
                TEST_MODE: TEST_MODE,
                STUDENT_MODE: STUDENT_MODE,
                PROVIDER: PROVIDER
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    };
};