const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 1488,
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: 'pug-loader'
            } , {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }, {
                test: /\.(eot|woff|ttf|woff2)$/i,
                use: 'url-loader',
            }, {
                test: /\.(png|jpg|gif|svg)$/i,
                use: 'url-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: __dirname + "/src/index.pug",
            filename: './index.html',
        }),
        new CopyWebpackPlugin ({
            patterns: [
                {from: './src/image', to: './image'}
            ]
        }),
        new webpack.ProvidePlugin ({
            $: 'jquery',
            jquery: 'jquery',
            'window.jquery': 'jquery',
        }),
    ]
}