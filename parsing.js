var hotels = require('./hotels')

var parsingData = {

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

  numberOfWeekdaysAndWeekends: (booking) => {
    var count = { 'weekdays': 0,
    'weekends': 0}
    booking.days.forEach((element) => {
      if (parsingData.weekends.indexOf(element) > -1) {
        count['weekends']++
      } else {
        count['weekdays']++
      }
    })
    return count
  }
}

module.exports = parsingData
