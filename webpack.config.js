const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude: '/node_modules/'
            }, 
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: '/node_modules/',
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader'},
                    {loader: 'sass-loader'},
                    { loader: 'postcss-loader',
                        options: {
                            indent: 'postcss',
                            plugins: () => [autoprefixer()]
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body',

        })
    ]
};