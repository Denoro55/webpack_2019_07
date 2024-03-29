const path = require('path');

module.exports = {
	mode: "development",
	output: {
		filename: 'main.js'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules'
			}
		]
	}
}

// module.exports = (env,options) => {

// 	let production = options.mode === 'production';

// 	conf.devtool = production ? false : 'eval-sourcemap'

// 	return conf;

// };