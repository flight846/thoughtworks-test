/* global it describe expect xit */

var expect = require('chai').expect
var assert = require('chai').assert
var hotels = require('./hotels')

describe('hotel data', () => {
  it('should return an array', () => {
    assert.isArray(hotels.outlets)
  })

  it('the hotel data array should contain objects', () => {
    assert.isObject(hotels.outlets[0])
  })
})

describe('converting input into object with two properties: loyalty program (T/F) and dates (array)', () => {
  it('should return an object', () => {
    assert.isObject(hotels.parseBooking('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)'))
  })

  it('the object should contain an array of dates', () => {
    assert.isArray(hotels.parseBooking('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)').dates)
  })

  it('the object should contain an array of days', () => {
    assert.isArray(hotels.parseBooking('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)').days)
  })
})
