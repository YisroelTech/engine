let filters = require('pug').filters;

let UglifyJS = require("uglify-es");

filters.uglify = function(str) {
  let result = UglifyJS.minify(str);
  return result.code;
};

