var parsingData = require('./parsing')
var hotels = require('./hotels')

// give string input to parsing
// return booking object to hotels.js
var main = {
  processBooking: function (input) {
    var booking = parsingData.parseBooking(input)
    console.log(findCheapestHotel(booking))
  }


}

module.exports = main
