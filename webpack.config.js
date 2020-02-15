const webpack = require('webpack');
const path = require('path');
const WebpackDevServer = require("webpack-dev-server");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(params){
    var webpackConfig = {
        context: path.resolve(__dirname, './src'),         // __dirname refers to the directory where this webpack.config.js lives
        entry: {
            app: './app.js',
            bundle: './styles/page-styles.scss',
            download: './styles/page-download.scss',
            cover: './styles/page-cover.scss'
        },                                                  //This can take multiple inputs in form of an array
        output: {
            path: path.resolve(__dirname, './public'),      // __dirname refers to the directory where this webpack.config.js lives
            filename: 'app.bundle.js',
            publicPath: '/'
        },
        watch: true,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [/(node_modules)/],
                    use: [
                        {
                            loader: 'react-hot-loader'
                        },
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/env']
                            }
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    exclude: [/node_modules/],
                    use: ExtractTextPlugin.extract({
                        use: [ 
                           { loader: 'css-loader?sourceMap', options: { minimize: true } },
                           { loader: 'sass-loader?sourceMap' }
                        ],
                        fallback: 'style-loader',
                        
                    })
                },
                {
                    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    exclude: [/node_modules/],
                    loaders: 'file-loader?name=fonts/[name].[ext]'
                },
                {
                    test: /\.(gif|png|jpe?g)$/i,
                    exclude: [/node_modules/],
                    loaders: [
                        'file-loader?name=images/[name].[ext]'
                    ]
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin({
              filename: 'app.[name].css',
              allChunks: true
            }),
        ],
        resolve: {
            modules: [path.resolve(__dirname, './src'), 'node_modules'],
            extensions: ['.js', '.scss']
        },
        devServer : {
            contentBase: path.resolve(__dirname, './'),     //specify the path from which dev server should serve the contents
            inline :  true,                                 //to run out of IFRAME, default it runs in iframe
            stats : "errors-only",                          //to output only the errors, default it outputs everything and makes log huge
            port : 8888
        }
    };
    return webpackConfig;
}
