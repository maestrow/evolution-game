var _files$map$join, _ref, _data;

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

const fs = require('fs');

const path = require('path'); // === Common Helpers


const resolve = p => path.resolve(__dirname, p);

const last = arr => arr[arr.length - 1];

const stripBom = i => i.charCodeAt(0) === 0xFEFF ? i.slice(1) : i;

const isEmpty = obj => Object.keys(obj).length === 0; // === Main code flow


const files = process.argv.slice(2).map(i => resolve(i));
const text = (_files$map$join = files.map(i => fs.readFileSync(i, 'utf8')).join(''), stripBom(_files$map$join));
const data = text.split('\r\n').reduce((acc, line) => {
  line.match(/^\s*$/) ? acc.push([]) : last(acc).push(line);
  return acc;
}, [[]]).map(i => i.length == 0 ? {} : {
  set: i[0],
  key: i[1],
  caption: i[2],
  description: i[3]
}).filter(i => !isEmpty(i));
_ref = (_data = data, JSON.stringify(_data)), console.log(_ref);
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(resolve, "resolve", "parser.js");
  reactHotLoader.register(last, "last", "parser.js");
  reactHotLoader.register(stripBom, "stripBom", "parser.js");
  reactHotLoader.register(isEmpty, "isEmpty", "parser.js");
  reactHotLoader.register(files, "files", "parser.js");
  reactHotLoader.register(text, "text", "parser.js");
  reactHotLoader.register(data, "data", "parser.js");
  leaveModule(module);
})();

;
