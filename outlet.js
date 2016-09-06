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

module.exports = HotelOutlet
