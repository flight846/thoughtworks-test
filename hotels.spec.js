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

describe('parseBooking()', () => {
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

describe('numberOfWeekdaysAndWeekends() should return an object tallying the number of days which are weekdays and weekends', () => {
  it('should return 3 weekdays', () => {
    assert.equal(3, hotels.numberOfWeekdaysAndWeekends('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)').weekdays)
  })

  it('should return 1 weekday and 2 weekend days', () => {
    assert.equal(1, hotels.numberOfWeekdaysAndWeekends('Regular: 16Mar2009(fri), 17Mar2009(sat), 18Mar2009(sun)').weekdays)
    assert.equal(2, hotels.numberOfWeekdaysAndWeekends('Regular: 16Mar2009(fri), 17Mar2009(sat), 18Mar2009(sun)').weekends)
  })
})

// describe('calculatePrices()', () => {
//   it('should return an array of hotel prices', () => {
//     hotels.calculatePrices('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)')
//   })
// })
