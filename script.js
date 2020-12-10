class Traveler {
  constructor(name) {
    this.name = name; // parameter
    this.food = 1; // initial value: 1
    this.isHealthy = true; // initial value: true - indicates whether a traveler is sick.
  }
  hunt() {
    // Increases the traveler's food by 2.
    this.food = this.food + 2;
  }
  eat() {
    // Consumes 1 unit of the traveler's food.
    // If the traveler doesn't have any food left to eat,
    // the traveler is no longer healthy (set isHealthy to false).
    if (this.food > 0) {
      this.isHealthy = true;
      console.log("Healthy");
      this.food = this.food - 1;
      console.log(this.food);
    } else {
      this.isHealthy = false;
      console.log("Unhealthy");
    }
  }
}

let matt = new Traveler("Matt");
console.log(matt);
matt.hunt();
console.log(matt);
matt.eat();
console.log(matt);

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }

  getAvailableSeatCount() {
    // Returns the number of empty seats, determined by the capacity set when the wagon was created,
    // subtracted by the number of passengers currently on board.
    let emptySeats = this.capacity - this.passengers.length;
    return emptySeats;
  }

  join(traveler) {
    // Adds the traveler to the wagon if there is space.
    // If the wagon is already at maximum capacity, don't add them.
    if (this.getAvailableSeatCount() > 0) {
      this.passengers.push(traveler);
    }
  }

  shouldQuarantine() {
    // Returns true if there is at least one unhealthy person in the wagon. Return false if not.
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].isHealthy === false) {
        return true;
      }
    }
    return false;
  }

  totalFood() {
    // Returns the total amount of food among all passengers in the wagon.
    let foodSupply = 0;
    for (let i = 0; i < this.passengers.length; i++) {
      foodSupply = foodSupply + this.passengers[i].food;
    }
    return foodSupply;
  }
}
