const webpack = require('webpack');
const path = require('path');
const WebpackDevServer = require("webpack-dev-server");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(params){
    var webpackConfig = {
        context: path.resolve( __dirname, './src'),     // __dirname refers to the directory where this webpack.config.js lives
        entry: './app.js',      //This can take multiple inputs in form of an array
        output: {
            path: path.resolve(__dirname, './dist/assets'),    // __dirname refers to the directory where this webpack.config.js lives
            filename: 'app.bundle.js',
            publicPath: '/assets'
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
                                presets: ['es2015']
                            }
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    exclude: [/node_modules/],
                    use: ExtractTextPlugin.extract({
                        use: [ 'css-loader?sourceMap', 'sass-loader?sourceMap' ],
                        fallback: 'style-loader',
                    })
                },
                {
                    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    loader: 'file-loader?name=fonts/[name].[ext]'
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin({
              filename: '[name].bundle.css',
              allChunks: true,
            }),
        ],
        resolve: {
            modules: [path.resolve(__dirname, './src'), 'node_modules'],
            extensions: [ '.js', '.scss']
        },
        devServer : {
            contentBase: path.resolve(__dirname, './src'),  //specify the path from which dev server should serve the contents
            inline :  true,      //to run out of IFRAME, default it runs in iframe
            stats : "errors-only",    //to output only the errors, default it outputs everything and makes log huge
            port : 8888
        }
    };
    return webpackConfig;
}
