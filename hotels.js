var hotels = {
  outlets: [
    {
      hotel: 'Lakewood',
      weekdayRate: 110,
      loyaltyWeekdayRate: 80,
      weekendRate: 90,
      loyaltyWeekendRate: 80,
      rating: 3
    },
    {
      hotel: 'Bridgewood',
      weekdayRate: 160,
      loyaltyWeekdayRate: 110,
      weekendRate: 60,
      loyaltyWeekendRate: 50,
      rating: 4
    },
    {
      hotel: 'Ridgewood',
      weekdayRate: 220,
      loyaltyWeekdayRate: 100,
      weekendRate: 150,
      loyaltyWeekendRate: 40,
      rating: 5
    }
  ],

  parseBooking: (input) => {
    var booking = {}
    booking['customerType'] = input.split(':')[0]
    booking['dates'] = input.split(':')[1].split(',')
    booking['days'] = []
    booking['dates'].forEach(function (element) {
      booking['days'].push(element.split('(')[1].slice(0, -1))
    })
    return booking
  }
}

// booking = { customerType: 'Regular',
//   dates: [ ' 16Mar2009(mon)', ' 17Mar2009(tues)', ' 18Mar2009(wed)' ] }
module.exports = hotels
