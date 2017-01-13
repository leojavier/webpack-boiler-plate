var path = require('path')
var extractWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: path.resolve('src/js'),
  entry: './index.js',
  output: {
    path: path.resolve('build/'),
    publicPath: '/public/assets/',
    filename:'bundle.js'
  },
  plugins: [
    new extractWebpackPlugin("styles.css")
  ],
  devServer: {
    contentBase: 'public',
    port: 3000
  },

  module: {
    //Preloaders
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'standard-loader'
      }
    ],

    //loaders
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: extractWebpackPlugin.extract('style-loader','css-loader')
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: extractWebpackPlugin.extract('style-loader','css-loader!less-loader!autoprefixer-loader')
      },
      {
        test: /\.(jpeg|png|ttf|otf|eot|woff|woff2|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1000'
      }
    ]
  }
}