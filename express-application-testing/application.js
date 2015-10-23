'use strict';

var express = require('express')
  , bodyParser = require('body-parser')
  , app = module.exports = express();


app.use(bodyParser.json());

app.get('/test-json-data', function (req, res) {
  res.json({
    hello: 'world'
  });
});

app.post('/post-name', function (req, res) {
  if (req.body.name) {
    res.json({
      name: req.body.name
    });
  } else {
    res.status(400).json({
      message: 'name is a required param'
    });
  }
});
