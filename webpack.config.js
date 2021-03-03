const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: 'public/bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.css', '.json']
	},
	devServer: {
		hot: true,
		port: 9000
	},

	module: {
		rules: [
			{
				test: /.ts$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/typescript', '@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: true
						}
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true
						}
					}
				]
			},
			{
				test: /.tsx$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/typescript',
							'@babel/preset-react',
							'@babel/preset-env'
						]
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: 'index.html',
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({ filename: 'style.css' })
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
					name: 'vendor',
					chunks: 'initial',
					enforce: true,
					priority: 10 // 預設為 0，必須大於預設 cacheGroups
				}
			}
		}
	}
}
