const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 0809,
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
            } , {
                test: /\.(png|jpg|gif|svg)$/i,
                use: 'file-loader',
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
    ]
}