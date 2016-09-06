/* global it describe */

var assert = require('chai').assert
var hotels = require('./hotels')
var parsingData = require('./parsing')

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
    assert.isObject(parsingData.parseBooking('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)'))
  })

  it('the object should contain an array of dates', () => {
    assert.isArray(parsingData.parseBooking('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)').dates)
  })

  it('the object should contain an array of days', () => {
    assert.isArray(parsingData.parseBooking('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)').days)
  })
})

describe('numberOfWeekdaysAndWeekends() should return an object tallying the number of days which are weekdays and weekends', () => {
  it('should return 3 weekdays', () => {
    var booking = parsingData.parseBooking('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)')
    assert.equal(3, parsingData.numberOfWeekdaysAndWeekends(booking).weekdays)
  })

  it('should return 1 weekday and 2 weekend days', () => {
    var booking = parsingData.parseBooking('Regular: 16Mar2009(fri), 17Mar2009(sat), 18Mar2009(sun)')
    assert.equal(1, parsingData.numberOfWeekdaysAndWeekends(booking).weekdays)
    assert.equal(2, parsingData.numberOfWeekdaysAndWeekends(booking).weekends)
  })
})

describe('calculatePrices()', () => {
  it('should return an array of hotel prices', () => {
    var booking = parsingData.parseBooking('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)')
    assert.isArray(hotels.calculatePrices(booking))
  })
})

describe('findCheapestHotel()', () => {
  it('should return the name of the cheapest hotel', () => {
    assert.equal('Lakewood', hotels.findCheapestHotel('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)'))
  })

  it('should return the name of the cheapest hotel', () => {
    assert.equal('Bridgewood', hotels.findCheapestHotel('Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)'))
  })

  it('should return the name of the cheapest hotel', () => {
    assert.equal('Ridgewood', hotels.findCheapestHotel('Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)'))
  })
})
