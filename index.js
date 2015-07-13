module.exports = function(width, height) {
  return width * height;
};

$ node
> var area = require('./index.js');
undefined
> area(2,4)
8
>
(^C again to quit)
>

$ git add package.json index.js
$ git commit -m "prepare for 1.0.0"
$ npm version 1.0.0
v1.0.0
$ git push && git push --tags
$ npm publish
