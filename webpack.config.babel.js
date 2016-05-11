import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist')
}

const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const isProduction = LAUNCH_COMMAND === 'production'
process.env.BABEL_ENV = LAUNCH_COMMAND

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const base = {
  entry: [ PATHS.app ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass')}
    ]
  }
}

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('main.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
}

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [
    HTMLWebpackPluginConfig,
    productionPlugin,
    new ExtractTextPlugin('main.css')
  ]
}

export default Object.assign({}, base,
  isProduction === true ? productionConfig : developmentConfig
)
