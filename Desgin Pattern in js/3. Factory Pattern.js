// Certainly! Here's an example of implementing the Factory Pattern in JavaScript:

// ```javascript
// Product objects
function Car(model, year) {
  this.model = model;
  this.year = year;
  this.type = 'Car';
}

function Bike(model, year) {
  this.model = model;
  this.year = year;
  this.type = 'Bike';
}

// Factory object
const VehicleFactory = {
  createVehicle: function(type, model, year) {
    if (type === 'car') {
      return new Car(model, year);
    } else if (type === 'bike') {
      return new Bike(model, year);
    } else {
      throw new Error('Invalid vehicle type.');
    }
  }
};

// Usage
const car = VehicleFactory.createVehicle('car', 'Sedan', 2021);
console.log(car); // Output: Car { model: 'Sedan', year: 2021, type: 'Car' }

const bike = VehicleFactory.createVehicle('bike', 'Mountain', 2022);
console.log(bike); // Output: Bike { model: 'Mountain', year: 2022, type: 'Bike' }
// ```

// In the above example, we have two product objects: `Car` and `Bike`. These objects represent different types of vehicles and have their specific properties.

// The `VehicleFactory` is the factory object that encapsulates the creation logic. It has a `createVehicle` method that takes the `type`, `model`, and `year` as parameters. Based on the provided `type`, it creates and returns the corresponding vehicle object.

// When `createVehicle` is called, it checks the `type` parameter and creates a new instance of the appropriate product object (`Car` or `Bike`). The created object is then returned to the caller.

// By using the Factory Pattern, we can abstract the object creation process and decouple the client code from the specific object types. The client only needs to interact with the factory to create the desired objects, without worrying about the details of object creation. This pattern provides a flexible way to create objects based on certain conditions and promotes code reusability.