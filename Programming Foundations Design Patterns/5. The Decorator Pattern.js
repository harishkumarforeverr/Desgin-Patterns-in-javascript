// Certainly! The Decorator pattern is a structural design pattern that allows behavior to be added to an individual object dynamically, without affecting the behavior of other objects from the same class. It wraps the original object with one or more decorator objects to provide additional functionality. Here's a simple example of the Decorator pattern in JavaScript:

// ```javascript
// Component - The original object or interface
class Coffee {
  getDescription() {
    return "Coffee";
  }

  getCost() {
    return 2.0;
  }
}

// Decorator - Adds extra behavior to the component
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getDescription() {
    return this.coffee.getDescription() + ", Milk";
  }

  getCost() {
    return this.coffee.getCost() + 0.5;
  }
}

// Decorator - Adds extra behavior to the component
class CaramelDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getDescription() {
    return this.coffee.getDescription() + ", Caramel";
  }

  getCost() {
    return this.coffee.getCost() + 0.75;
  }
}

// Usage
const coffee = new Coffee();
const coffeeWithMilk = new MilkDecorator(coffee);
const coffeeWithMilkAndCaramel = new CaramelDecorator(coffeeWithMilk);

console.log(coffeeWithMilkAndCaramel.getDescription()); // Output: Coffee, Milk, Caramel
console.log(coffeeWithMilkAndCaramel.getCost()); // Output: 3.25
// ```

// In this example, we have a `Coffee` class that represents the original object or interface. It provides two methods, `getDescription()` and `getCost()`, which return the description and cost of the coffee, respectively.

// The `MilkDecorator` and `CaramelDecorator` classes are decorators. They wrap the original `Coffee` object and add extra behavior to it. Each decorator inherits from the same base class as the original object, and it has a reference to the wrapped object.

// The decorators override the `getDescription()` and `getCost()` methods to extend the functionality. They call the corresponding methods of the wrapped object and add their own behavior to the returned values.

// In the usage section, we create an instance of the `Coffee` class. Then, we decorate it with the `MilkDecorator` and `CaramelDecorator`, forming a chain of decorators. Finally, we call the `getDescription()` and `getCost()` methods on the decorated object.

// As a result, the output will be:

// ```
// Coffee, Milk, Caramel
// 3.25
// ```

// The Decorator pattern allows for dynamic composition of objects by adding or modifying their behavior at runtime. It offers a flexible alternative to subclassing, as decorators can be stacked and combined in various ways to achieve different combinations of behaviors without affecting the underlying objects or other decorators.