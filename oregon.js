console.log("Hi");

class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food += 2;
  }

  eat() {
    this.food -= 1;
    if (this.food === 0) {
      this.isHealthy = false;
    } else {
      this.food -= 1;
    }
  }
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }


  getAvailableSeatCount() {
      return this.passengers.lenght - this.capacity 
  }

  join(traveler){
      if(this.capacity > this.passengers.length) {
          this.passengers.push(traveler);
      }
  }

  shouldQuarantine() {
      for(let i =0; i<this.passengers.length; i++) {
          if(this.passengers[i].isHealthy === false) {
              return true;
          }
      }
      return false;
  }

  totalFood() {}
}
