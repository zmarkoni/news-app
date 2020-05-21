const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'news-app-prod-bundle.js',
		publicPath: '',
	},
	devtool: 'none',
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.(js|jsx)$/,
				exclude: '/node_modules/',
				loader: 'eslint-loader',
			},
			{
				test: /\.js$/,
				loader: ['babel-loader'],
				exclude: '/node_modules/',
			},
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: '/node_modules/',
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
					{
						loader: 'postcss-loader',
						options: {
							indent: 'postcss',
							plugins: () => [autoprefixer()],
						},
					},
				],
			},
			{
				test: /\.(png|jpg?g|gif)$/,
				loader: 'url-loader?limit=8000&name=images/[name].[ext]',
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
			{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html',
			inject: 'body',
		}),
		new StylelintPlugin({
			configFile: __dirname + '/.stylelintrc',
			files: '**/*.(sa|sc|c)ss',
		}),
	],
};
