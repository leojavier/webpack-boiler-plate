var devConfig = require('./webpack.config.js')
var webpackStrip = require('strip-loader')

var stripLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'strip-loader?strip[]=debug,strip[]=console.log'
}

devConfig.module.loaders.push(stripLoader)

module.exports = devConfig
