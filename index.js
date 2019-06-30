const jimp = require('jimp');
var { promisify } = require('util');
var sizeOf = promisify(require('image-size'));
sizeOf('./image.jpg')
  .then(dimensions => { console.log(dimensions.width, dimensions.height); })
  .catch(err => console.error(err));