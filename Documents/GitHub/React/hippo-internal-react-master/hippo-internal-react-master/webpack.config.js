var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        "app": ['babel-polyfill', "./app/app"],
        "lib": "./app/lib"
    },
    output: {
        path: __dirname,
        filename: "./release/[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                include: /app/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                include: /app/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'url?limit=10000'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    cache: true,
    // debug: true,
    devtool: 'source-map',
    // 'output-pathinfo': true
    resolve: {
        modules: [
            path.resolve('./app'),
            path.resolve('./node_modules')
        ]
    },
};

module.exports = config;