const { merge } = require('webpack-merge');
const common = require('./webpack.config.js')();
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

// for local development inside of the shell
module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/__mocks__', to: '__mocks__' }]
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),      
      'process.env.REACT_APP_API_URL': `'http://a46853b25c06a4d9688027b9f45de2d3-893753003.us-east-2.elb.amazonaws.com:8080/api/v1'`,
      // 'process.env.REACT_APP_API_URL': `'http://localhost:8080/api/v1'`,
      'process.env.REACT_APP_IPFS_URL': `'3.135.192.195'`,
      'process.env.REACT_APP_IPFS_PORT': 5001,
      'process.env.ENV': `'development'`
    })
  ]
});
