var HTMLWebpackPlugin = require('html-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template : './src/index.html',
	filename : 'index.html',
	inject 	 : 'body',
});


module.exports = {

	 entry: {
	 	index : __dirname + "/src/index.jsx"
	 },

	 module : {
	 	rules : [
	 		{
				test    : /\.jsx$/,
				exclude : /node_modules/,
				loader  : 'babel-loader'
			},
			{
		      	test: /\.css$/,
		      	loader: combineLoaders([
		        {
		          loader: 'style-loader'
		        },{
				    loader: 'css-loader',
				    query: {
				     	modules: true,
				        localIdentName: '[name]__[local]___[hash:base64:5]'
				    }
				}

				])
		    }

	 	]
	 },

	 output : {
	 	path : __dirname + "/dist",
	 	filename : "[name][hash].js"
	 },

	 plugins : [HTMLWebpackPluginConfig]

};