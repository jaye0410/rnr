var webpack = require('webpack');

module.exports = {
	entry: {
    main: './src/app.js',
    //other: './src/other.js'
	},
	output: {
	  filename: '[name].bundle.js',
	  path: './dist'
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
}