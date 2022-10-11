class Food {
    constructor(name, daysToSpoil, fresh = true) {
      this.name = name;
      this.daysToSpoil = daysToSpoil;
      this.fresh = fresh;
    }
  
    prepare() {
      console.log(`${this.name} is being prepared`);
    }
  
    fresh() {
      this.daysToSpoil < 1 ? (this.fresh = false) : (this.fresh = true);
      this.daysToSpoil > 0
        ? console.log(
            `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
          )
        : console.log(`${this.name} has spoiled.`);
    }
  
    oneDayPassed() {
      this.daysToSpoil -= 1;
      this.fresh();
    }
}  
// Do not edit below this line
module.exports = Food;
