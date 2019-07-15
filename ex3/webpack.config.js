var webpack = require('webpack');
var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './app/index.js',
    vendor: [
      'moment',
      'lodash'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    }
  }
}