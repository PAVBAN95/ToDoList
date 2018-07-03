var HTMLWebpackPlugin = require('html-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template : './client/index.html',
	filename : 'index.html',
	inject 	 : 'body',
});


module.exports = {

	 entry: {
	 	index : __dirname + "/client/index.js"
	 },

	 module : {
	 	rules : [
	 		{
				test    : /\.js$/,
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