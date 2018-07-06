const path = require('path')
const webpack = require ('webpack')
const base = require ('./config/webpack.base.js')

module.exports = Object.assign({
  entry: {
    main: [
      './src/app.js',
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
    ]
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },
  devtool: "inline-source-map",
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}, base);
