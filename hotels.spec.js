/* global it describe expect xit */

var expect = require('chai').expect
var assert = require('chai').assert
var hotels = require('./hotels')

describe('hotel data', function () {
  it('should return an array of three elements', function () {
    assert.equal(3, hotels.outlets.length)
  })
})
