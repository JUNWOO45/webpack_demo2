var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './app/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      Vendor: path.resolve(__dirname, './app/vendor/')
    }
  }
}