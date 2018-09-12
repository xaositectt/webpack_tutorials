const merge = require('webpack-merge')
const common = require('./webpack.base')
const webpack = require('webpack')
const config = require('../config/index')

module.exports = merge(common, {
  mode: 'development',
  devtool: config.dev.devtool,
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: config.dev.devServerOpts
})
