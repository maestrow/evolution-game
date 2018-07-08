const path = require('path')
const webpack = require ('webpack')
const base = require ('./config/webpack.base.js')

module.exports = Object.assign({
  entry: {
    main: [
      './src/app.tsx',
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
    ]
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },
  devtool: false, // "inline-source-map", - uncomment to enable sourcemaps for typescript.
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}, base);
