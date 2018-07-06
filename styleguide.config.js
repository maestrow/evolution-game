const path = require ('path');
const fs = require ('fs');
const webpackConfig = require ('./config/webpack.base.js')

webpackConfig.module.rules = webpackConfig.module.rules.concat([
  {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  },
]);

module.exports = {
  updateExample(props, filepath) {
    const parts = path.parse(filepath);
    const cssPath = path.join(parts.dir, `${parts.name}.scss`);
    const content = fs.existsSync(cssPath) 
      ? `require ('./${parts.name}.scss');\n\n` + props.content 
      : props.content;
    return {
      content: content,
      settings: props.settings,
      lang: props.lang
    };
  },
  contextDependencies: [
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'src/utils'),
  ],
  webpackConfig: webpackConfig
}