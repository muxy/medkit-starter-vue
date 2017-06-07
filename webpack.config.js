const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 9000;

module.exports = {
  entry: {
    config: './src/config/index.js',
    live: './src/live/index.js',
    viewer: './src/viewer/index.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'config.html',
      template: 'src/config/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'live.html',
      template: 'src/live/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'viewer.html',
      template: 'src/viewer/index.html'
    })
  ],

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: "cheap-eval-source-map",

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: port,
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  }
};