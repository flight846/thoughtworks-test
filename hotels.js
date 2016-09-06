var parsingData = require('./parsing')
var HotelOutlet = require('./outlet')
var Rates = require('./Rates')

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
