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

module.exports = Rates
