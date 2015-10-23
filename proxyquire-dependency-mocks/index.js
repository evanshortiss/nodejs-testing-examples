'use strict';

var request = require('request');

exports.getUrl = function (url, callback) {
  request({
    method: 'GET',
    url: url
  }, function (err, res, body) {
    if (err) {
      callback(err, null);
    } else if (res.statusCode !== 200) {
      callback(
        new Error('status code ' + res.statusCode + ' was received'),
        body
      );
    } else {
      callback(null, body);
    }
  })
};
