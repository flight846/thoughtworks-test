var parsingData = require('./parsing')

function Rates(weekdayRate, weekendRate) {
  this.weekdayRate = weekdayRate
  this.weekendRate = weekendRate

  this.calculateRateFor = function(dayCount) {
    var price = 0
    price += dayCount.weekdays * this.weekdayRate
    price += dayCount.weekends * this.weekendRate
    return price
  }
}

function HotelOutlet (name, rating, regularRate, rewardsRate) {
  this.name = name,
  this.rating = rating
  this.regularRate = regularRate
  this.rewardsRate = rewardsRate

  this.calculatePrice = function(customerType, dayCount) {
    var price = 0
    if (customerType === 'Regular') {
      price += this.regularRate.calculateRateFor(dayCount)
    } else if (customerType === 'Rewards') {
      price += this.rewardsRate.calculateRateFor(dayCount)
    }
    return price
  }
}

var hotels = {
  outlets: [new HotelOutlet('Lakewood', 3, new Rates(110, 90), new Rates(80, 80)),
    new HotelOutlet('Bridgewood', 4, new Rates(160, 60), new Rates(110, 50)),
    new HotelOutlet('Ridgewood', 5, new Rates(220, 150), new Rates(100, 40)) ],

  calculatePrices: (booking) => {
    var dayCount = parsingData.numberOfWeekdaysAndWeekends(booking)

    var totalPrices = []

    hotels.outlets.forEach((element) => {
      var price = element.calculatePrice(booking.customerType, dayCount)
      var obj = {}

      obj['name'] = element.name
      obj['price'] = price
      obj['rating'] = element.rating
      totalPrices.push(obj)
    })
    return totalPrices
  },

  findCheapestHotel: (booking) => {
    // var booking = parsingData.parseBooking(input)
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

module.exports = hotels
