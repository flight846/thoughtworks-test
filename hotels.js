var hotels = {
  outlets: [
    {
      name: 'Lakewood',
      weekdayRate: 110,
      loyaltyWeekdayRate: 80,
      weekendRate: 90,
      loyaltyWeekendRate: 80,
      rating: 3
    },
    {
      name: 'Bridgewood',
      weekdayRate: 160,
      loyaltyWeekdayRate: 110,
      weekendRate: 60,
      loyaltyWeekendRate: 50,
      rating: 4
    },
    {
      name: 'Ridgewood',
      weekdayRate: 220,
      loyaltyWeekdayRate: 100,
      weekendRate: 150,
      loyaltyWeekendRate: 40,
      rating: 5
    }
  ],

  weekdays: ['mon', 'tues', 'wed', 'thur', 'fri'],
  weekends: ['sat', 'sun'],

  parseBooking: (input) => {
    var booking = {}
    booking['customerType'] = input.split(':')[0]
    booking['dates'] = input.split(':')[1].split(',')
    booking['days'] = []
    booking['dates'].forEach((element) => {
      booking['days'].push(element.split('(')[1].slice(0, -1))
    })
    return booking
  },

  numberOfWeekdaysAndWeekends: (input) => {
    var booking = hotels.parseBooking(input)
    var count = { 'weekdays': 0,
    'weekends': 0}
    booking.days.forEach((element) => {
      if (hotels.weekdays.indexOf(element) > -1) {
        count['weekdays']++
      } else if (hotels.weekends.indexOf(element) > -1) {
        count['weekends']++
      }
    })
    return count
  },

  calculatePrices: (input) => {
    var booking = hotels.parseBooking(input)
    var weekdays = hotels.numberOfWeekdaysAndWeekends(input).weekdays
    var weekends = hotels.numberOfWeekdaysAndWeekends(input).weekends

    var totalPrices = []

    hotels.outlets.forEach((element) => {
      var price = 0
      var obj = {}

      if (booking.customerType === 'Regular') {
        price += weekdays * element.weekdayRate
        price += weekends * element.weekendRate
      } else if (booking.customerType === 'Rewards') {
        price += weekdays * element.loyaltyWeekdayRate
        price += weekends * element.loyaltyWeekendRate
      }

      obj['name'] = element.name
      obj['price'] = price
      obj['rating'] = element.rating
      totalPrices.push(obj)
    })
    return totalPrices
  },

  findCheapestHotel: (input) => {
    var options = hotels.calculatePrices(input)
    var cheapestHotel = options[0]
    options.forEach((element) => {
      if (element.price === cheapestHotel.price && element.rating > cheapestHotel.rating) {
        cheapestHotel = element
      }
      else if (element.price < cheapestHotel.price) {
        cheapestHotel = element
      }
    })

    return cheapestHotel.name
  }
}

module.exports = hotels
