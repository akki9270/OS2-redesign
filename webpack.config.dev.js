const { merge } = require('webpack-merge');
const common = require('./webpack.config.js')();
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

// for local development inside of the shell
module.exports = merge(common, {
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/__mocks__', to: '__mocks__' }]
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API_URL': process.env.REACT_APP_API_URL,
      'process.env.REACT_APP_AUTH': process.env.REACT_APP_AUTH
    })
  ]
});
