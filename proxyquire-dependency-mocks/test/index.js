'use strict';

var expect = require('chai').expect
  , proxyquire = require('proxyquire')
  , http = proxyquire('../index.js', {
    'request': requestStub
  });

function requestStub (opts, callback) {
  if (opts.url.indexOf('error') !== -1) {
    callback(
      // Mimic a regular error
      new Error('ECONNREFUSED'),
      null,
      null
    );
  } else if (opts.url.indexOf('404') !== -1) {
    callback(
      null,
      {
        statusCode: 404
      },
      'not found'
    );
  } else {
    callback(
      null,
      {
        statusCode: 200
      },
      JSON.stringify({
        key: 'value'
      })
    );
  }
}

describe('proxyquire HTTP Test Suite', function () {

  describe('#getUrl', function () {
    it('Should return an error', function (done) {
      http.getUrl('http://fake-error.com', function (err) {
        expect(err).to.be.an.instanceof(Error);
        done();
      })
    });

    it('Should return a 404', function (done) {
      http.getUrl('http://fake-404.com', function (err, body) {
        expect(err).to.be.an.instanceof(Error);
        expect(body).to.be.a('string');
        done();
      })
    });

    it('Should return an error', function (done) {
      http.getUrl('http://json-test-url.com', function (err, body) {
        expect(err).to.be.null;
        expect(body).to.be.a('string');
        expect(JSON.parse(body)).to.be.an('object');
        done();
      })
    });
  });

});
