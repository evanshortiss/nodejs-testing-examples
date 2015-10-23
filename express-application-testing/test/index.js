'use strict';

/**
 * The assert module is used to perform assertions in Node.js code. For example
 *
 * assert.equal('a', 'b') => false
 * assert.equal('a', 'a') => true
 *
 * You can view the latest docs here: https://nodejs.org/api/assert.html
 */
var request = require('supertest')
  , expect = require('chai').expect
  , app = require('../application.js');


describe('Express Application Test', function () {

  describe('/test-json-data', function () {
    it('Should return JSON data', function (done) {
      request(app)
        .get('/test-json-data')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res.body).to.be.have.property('hello');

          done();
        });
    });
  });

  describe('/post-name', function () {
    it('Should echo back username passed in', function (done) {
      request(app)
        .post('/post-name')
        .send({
          name: 'red hat'
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res.body).to.be.have.property('name');
          expect(res.body.name).to.equal('red hat');

          done();
        });
    });

    it('Should return an error', function (done) {
      request(app)
        .post('/post-name')
        .send({})
        .expect('Content-Type', /json/)
        .expect(400)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res.body).to.be.have.property('message');
          expect(res.body.message).to.equal('name is a required param');

          done();
        });
    });
  });

});
