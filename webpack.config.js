'use strict';

const path = require('path');
const webpack = require('webpack');

const pkg = require('./package');

module.exports = {
  entry: {
    homepage: path.join(__dirname, 'homepage')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    library:'[name]',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  externals: [
    {
    }
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['latest', 'stage-2']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
