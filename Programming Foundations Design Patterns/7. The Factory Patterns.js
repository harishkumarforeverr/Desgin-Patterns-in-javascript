// Certainly! The Factory pattern is a creational design pattern that provides an interface for creating objects but allows subclasses to decide which class to instantiate. It promotes loose coupling and encapsulates object creation logic. Here's a simple example of the Factory pattern in JavaScript:

// ```javascript
// // Product - Represents the objects created by the factory
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `Car: ${this.make} ${this.model}`;
  }
}

// Factory - Defines the interface for creating products
class CarFactory {
  createCar(make, model) {
    return new Car(make, model);
  }
}

// Usage
const carFactory = new CarFactory();

const car1 = carFactory.createCar("Toyota", "Camry");
console.log(car1.getInfo()); // Output: Car: Toyota Camry

const car2 = carFactory.createCar("Honda", "Accord");
console.log(car2.getInfo()); // Output: Car: Honda Accord
// ```

// In this example, we have a `Car` class that represents the products created by the factory. It has a constructor to set the make and model of the car and a method `getInfo()` to retrieve information about the car.

// The `CarFactory` class represents the factory. It defines the interface for creating cars and has a method `createCar()` that takes the make and model as parameters and returns a new instance of the `Car` class.

// In the usage section, we create an instance of the `CarFactory` class. We then use the factory to create two cars, `car1` and `car2`, by calling the `createCar()` method with different make and model values.

// Finally, we can call the `getInfo()` method on each car to retrieve their information and log it to the console.

// As a result, the output will be:

// ```
// Car: Toyota Camry
// Car: Honda Accord
// ```

// The Factory pattern decouples the client from the specific implementation of object creation. It allows for flexible and extensible code, as new product classes can be added by extending the factory without modifying the client code.