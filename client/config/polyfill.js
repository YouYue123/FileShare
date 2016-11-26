if (typeof Promise === 'undefined'){
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extension.js');
}

require('whatwg-fetch');

Object.assign = require('object-assign');
