const path = require('path');
const fs = require('fs');

module.exports = {
  updateExample(props, filepath) {
    const parts = path.parse(filepath);
    const cssPath = path.join(parts.dir, `${parts.name}.scss`);
    const content = fs.existsSync(cssPath) 
      ? `    require ('./${parts.name}.scss');\n\n` + props.content 
      : props.content;
    // console.log(cssPath);
    // console.log(fs.existsSync(cssPath));
    // console.log(props);
    // console.log(content);
    // console.log('\n------------\n');
    return {
      content: content,
      settings: props.settings,
      lang: props.lang
    };
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js|\.jsx$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
      ]
    }
  }
}