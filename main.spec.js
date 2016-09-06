/* global it describe */

var assert = require('chai').assert
// var hotels = require('./hotels')
var parsingData = require('./parsing')
var main = require('./main')

describe('provide string input to parsing.js and return booking object to hotels.js', () => {
  it('should return an object', () => {
    assert.isObject(main.processBooking())
  })

})
