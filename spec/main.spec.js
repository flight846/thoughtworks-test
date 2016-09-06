/* global it describe */

var assert = require('chai').assert
// var hotels = require('./hotels')
var parsingData = require('../parsing')
var main = require('../main')

describe('provide string input to parsing.js and return booking object to hotels.js', () => {
  xit('should return an object', () => {
    assert.isObject(main.processBooking('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)'))
  })
})
