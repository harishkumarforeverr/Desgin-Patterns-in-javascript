// Certainly! The Decorator Pattern is a design pattern that allows you to dynamically add new functionality to an object by wrapping it with another object that provides the desired features. Here's a simple example of the Decorator Pattern in JavaScript:

// ```javascript
// The base component interface
class Pizza {
  getDescription() {
    return 'Plain pizza';
  }

  getCost() {
    return 10;
  }
}

// Decorator 1: Cheese topping
class CheeseDecorator extends Pizza {
  constructor(pizza) {
    super();
    this.pizza = pizza;
  }

  getDescription() {
    return this.pizza.getDescription() + ', with extra cheese';
  }

  getCost() {
    return this.pizza.getCost() + 2;
  }
}

// Decorator 2: Pepperoni topping
class PepperoniDecorator extends Pizza {
  constructor(pizza) {
    super();
    this.pizza = pizza;
  }

  getDescription() {
    return this.pizza.getDescription() + ', with pepperoni';
  }

  getCost() {
    return this.pizza.getCost() + 3;
  }
}

// Usage
let myPizza = new Pizza();
console.log(myPizza.getDescription());  // Output: Plain pizza
console.log(myPizza.getCost());         // Output: 10

myPizza = new CheeseDecorator(myPizza);
console.log(myPizza.getDescription());  // Output: Plain pizza, with extra cheese
console.log(myPizza.getCost());         // Output: 12

myPizza = new PepperoniDecorator(myPizza);
console.log(myPizza.getDescription());  // Output: Plain pizza, with extra cheese, with pepperoni
console.log(myPizza.getCost());         // Output: 15
// ```

// In this example, we have a `Pizza` class that represents the base component. It has two methods: `getDescription()` and `getCost()`, which return the description and cost of the pizza, respectively.

// We then define two decorator classes: `CheeseDecorator` and `PepperoniDecorator`. Both decorators inherit from the `Pizza` class and wrap around an existing pizza object. They override the `getDescription()` and `getCost()` methods to provide additional functionality while delegating the original calls to the wrapped pizza object.

// Finally, we create a pizza object, apply decorators to it, and demonstrate how the description and cost change as we add more decorators.

// The Decorator Pattern allows you to add or modify behavior dynamically at runtime, making it a flexible and powerful tool for extending the functionality of objects.