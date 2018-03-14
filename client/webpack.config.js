const webpack = require('webpack');
const path = require('path');
const distPath = path.resolve(__dirname, './dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
	mode: 'development',
	entry: {
		app: [
			path.resolve(__dirname, './src/index.js')
		]
	},
	output: {
		path: distPath,
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				enforce: 'pre',
				use: 'eslint-loader'
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(gif|svg|jpeg|png|jpg)$/,
				include: path.resolve(__dirname, './src/assets/'),
				exclude: /node_modules/,
				use: 'url-loader?limit=10000&name=assert/[name]-[hash].[ext]'
			}
		]
	},
	resolve: {
		alias: {
			'containers': path.resolve(__dirname, 'src/contaimers/'),
			'components': path.resolve(__dirname, 'src/components/'),
			'assets': path.resolve(__dirname, 'src/assets/'),
			'reducers': path.resolve(__dirname, 'src/reducers/'),
			'actions': path.resolve(__dirname, 'src/actions/'),
			'store': path.resolve(__dirname, 'src/store/'),
			'utils': path.resolve(__dirname, 'src/utils/')
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/assets/index.html'),
			filename: 'index.html',
			path: distPath
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname, './dist/'),
		port: 8325,
		historyApiFallback: true,
		inline: true,
		hot: true,
		host: '0.0.0.0'
	}
}

module.exports = webpackConfig;