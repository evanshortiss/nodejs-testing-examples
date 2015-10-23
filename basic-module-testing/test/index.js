'use strict';

/**
 * The assert module is used to perform assertions in Node.js code. For example
 *
 * assert.equal('a', 'b') => false
 * assert.equal('a', 'a') => true
 *
 * You can view the latest docs here: https://nodejs.org/api/assert.html
 */
var assert = require('assert')
  , example = require('../index.js');


[
  function testGetUsers () {
    var users = example.getUsers();

    assert.equal(Array.isArray(users), true, 'Users should be an array');
    assert.equal(users.length, 2);
  },

  function testJoinStrings () {
    var testStrings = ['hello', 'world', 'it\'s', 'me, Node.js!']
      , expected = 'hello world it\'s me, Node.js!';

    assert.equal(example.joinStrings(testStrings), expected);
  },

  function exampleFailingJoin () {
    var testStrings = ['hello', 'world', 'it\'s', 'me, Node.js!'];

    assert.equal(example.joinStrings(testStrings), 'not the expected result');
  }
].forEach(function (fn) {
  try {
    fn();
    console.log('[PASS] - '+ fn.name);
  } catch (e) {
    console.log('[FAIL] - ' + fn.name);
    console.log(e.stack);
  }
})
