/**
 *
 * Sure! The Strategy pattern is a behavioral design pattern that enables you to define a family of interchangeable algorithms and encapsulate each one individually. Here's a simple example of how the Strategy pattern can be implemented in JavaScript:
 */

// Define the different strategies

const additionStrategy = {
  calculate: (a, b) => a + b,
};

const subtractionStrategy = {
  calculate: (a, b) => a - b,
};

const multiplicationStrategy = {
  calculate: (a, b) => a * b,
};

// Context that uses the strategy

class Calculator {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(a, b) {
    return this.strategy.calculate(a, b);
  }
}

// Usage

const calculator = new Calculator(additionStrategy);

console.log(calculator.calculate(5, 3)); // Output: 8

calculator.setStrategy(subtractionStrategy);

console.log(calculator.calculate(5, 3)); // Output: 2

calculator.setStrategy(multiplicationStrategy);

console.log(calculator.calculate(5, 3)); // Output: 15

/**
 * 
 * 
 * 
 * In the example above, we have three different strategies: additionStrategy, subtractionStrategy, and multiplicationStrategy. Each strategy implements the same calculate method but performs a different operation.

The Calculator class acts as a context that uses the selected strategy to perform the calculation. It has a setStrategy method to change the strategy dynamically, and the calculate method delegates the calculation to the current strategy.

By using the Strategy pattern, we can easily switch between different strategies without modifying the core logic of the Calculator class. This allows for greater flexibility and maintainability in the code.

You can expand this example by adding more strategies or customizing the behavior of each strategy according to your specific needs.
 */
