function HotelOutlet (name, weekdayRate, loyaltyWeekdayRate, weekendRate, loyaltyWeekendRate, rating) {
  this.name = name,
  this.weekdayRate = weekdayRate,
  this.loyaltyWeekdayRate = loyaltyWeekdayRate,
  this.weekendRate = weekendRate,
  this.loyaltyWeekendRate = loyaltyWeekendRate,
  this.rating = rating
}

var parsingData = {
  parseBooking: (input) => {
    var booking = {}
    booking['customerType'] = input.split(':')[0]
    booking['dates'] = input.split(':')[1].split(',')
    booking['days'] = []
    booking['dates'].forEach((element) => {
      booking['days'].push(element.split('(')[1].slice(0, -1))
    })
    return booking
  }
}

var hotels = {
  outlets: [new HotelOutlet('Lakewood', 110, 80, 90, 80, 3),
    new HotelOutlet('Bridgewood', 160, 110, 60, 50, 4),
    new HotelOutlet('Ridgewood', 220, 100, 150, 40, 5) ],

  weekends: ['sat', 'sun'],

  numberOfWeekdaysAndWeekends: (booking) => {
    var count = { 'weekdays': 0,
    'weekends': 0}
    booking.days.forEach((element) => {
      if (hotels.weekends.indexOf(element) > -1) {
        count['weekends']++
      } else {
        count['weekdays']++
      }
    })
    return count
  },

  calculatePrices: (booking) => {
    var dayCount = hotels.numberOfWeekdaysAndWeekends(booking)

    var totalPrices = []

    hotels.outlets.forEach((element) => {
      var price = 0
      var obj = {}

      if (booking.customerType === 'Regular') {
        price += dayCount.weekdays * element.weekdayRate
        price += dayCount.weekends * element.weekendRate
      } else if (booking.customerType === 'Rewards') {
        price += dayCount.weekdays * element.loyaltyWeekdayRate
        price += dayCount.weekends * element.loyaltyWeekendRate
      }

      obj['name'] = element.name
      obj['price'] = price
      obj['rating'] = element.rating
      totalPrices.push(obj)
    })
    return totalPrices
  },

  findCheapestHotel: (input) => {
    var booking = parsingData.parseBooking(input)
    var options = hotels.calculatePrices(booking)
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

module.exports = {
  hotels: hotels,
  parsingData: parsingData
}
