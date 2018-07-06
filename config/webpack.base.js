const path = require ('path');
const fs = require ('fs');

const resolve = p => path.resolve(__dirname, '../', p);

function readJson(path) {
  return JSON.parse(fs.readFileSync(path).toString());
}

module.exports = {
  resolve: {
    modules: ['node_modules', resolve('src')],
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: readJson('.babelrc')
      },
      {
        test: /\.ts|\.tsx$/,
        loader: 'ts-loader',
      }
    ]
  }
};