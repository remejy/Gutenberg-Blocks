module.exports = {
	entry: './src-block.js',
	output: {
		path: __dirname,
		filename: 'block.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};
