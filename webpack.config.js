const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[file].[contenthash].js',
    publicPath: '/'
  },
  devServer: {
    host: '0.0.0.0',
    allowedHosts: "all", 
    static: {
      directory: path.resolve(__dirname, 'build'),
    },    
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization, Broker-Id'
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'static/web.config' }]
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'static', 'index.html'),
      favicon: path.resolve(__dirname, 'static', 'favicon.png')
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/), // replaces all moment locales, useful for if/when we want to use moment.js
    // new DynamicCdnWebpackPlugin({
    //   exclude: ['hoist-non-react-statics'],
    //   resolver: '@talend/module-to-cdn'
    // }), // converts npm libraries to cdn links from unpkg
    new CleanWebpackPlugin(),
    isDevelopment && new webpack.HotModuleReplacementPlugin(), // for hot reload
    isDevelopment && new ReactRefreshWebpackPlugin() // for hot reload
  ],
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      esmodules: true
                    }
                  }
                ],
                '@babel/preset-react',
                '@babel/preset-typescript'
              ],
              plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean)
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,        
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    moduleIds: 'deterministic',
    runtimeChunk: 'multiple',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = (env, argv) => {
  if (argv && argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[chunkhash].js';
  }
  const isDevelopment = env !== 'production';
  if (!isDevelopment) config.devtool = 'inline-source-map';

  return config;
};
