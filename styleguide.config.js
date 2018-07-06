const path = require ('path');
const fs = require ('fs');
const webpackConfig = require ('./config/webpack.base.js')

webpackConfig.module.rules = webpackConfig.module.rules.concat([
  {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  },
]);

const req = (name) => `require ('./${name}.scss');\n\n`;

console.log(path.resolve(__dirname, 'src/styles/common.scss'));

module.exports = {
  updateExample(props, filepath) {
    const parts = path.parse(filepath);
    const cssPath = path.join(parts.dir, `${parts.name}.scss`);
    const content = fs.existsSync(cssPath) 
      ? req(parts.name) + props.content 
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
  assetsDir: 'static',
  webpackConfig: webpackConfig
}