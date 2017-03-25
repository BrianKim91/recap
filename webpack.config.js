var path = require("path");
module.exports = {

  entry: "./app/assets/scripts/App.js",
  output: {
    publicPath: path.join('./app/temp/scripts'),
    filename: './app/temp/scripts/App.js'
  },
  module: {
  	loaders: [
  		{
  			loader: 'babel-loader',
  			query: {
  				presets: ['es2015']
  			},
  			test: /\.js$/,
  			exclude: /node_modules/
  		}
  	]
  }
}