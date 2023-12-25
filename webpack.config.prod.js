const { merge } = require('webpack-merge');
const common = require('./webpack.config.js')();
const webpack = require('webpack');

// for local development inside of the shell
module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ENV': `"prod"`
    })
  ]
});
