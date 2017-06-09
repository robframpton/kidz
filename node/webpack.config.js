module.exports = {
	output: {
		library: 'Kidz'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['metal-jsx']
					}
				}
			}
		]
	}
};
