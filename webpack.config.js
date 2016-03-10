var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './app/index.js'
  ],

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass')}
    ]
  },

  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist'
  },

  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('main.css')
  ]
}
