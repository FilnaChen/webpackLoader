const path = require('path');

module.exports = {
	entry: {
		index: './index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	resolveLoader: {
		modules: ['node_modules', './loaders']
	},
	module: {
		rules: [
			{
				test: /\.js/,
				use: 'parseJs'
			}
		]
	}
}