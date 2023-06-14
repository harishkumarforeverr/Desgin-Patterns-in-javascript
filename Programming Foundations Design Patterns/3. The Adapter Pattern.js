/**
 * Certainly! The Adapter pattern is a structural design pattern that allows objects with incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces, enabling them to collaborate. Here's a simple example of the Adapter pattern in JavaScript:
 */

// Adaptee - Incompatible interface
class FahrenheitSensor {
  getTemperature() {
    const temperatureF = Math.random() * 100;
    return temperatureF.toFixed(2);
  }
}

// Target - Compatible interface
class CelsiusSensor {
  getTemperature() {
    const temperatureC = (Math.random() * 100 - 32) * (5 / 9);
    return temperatureC.toFixed(2);
  }
}

// Adapter - Adapts FahrenheitSensor to CelsiusSensor interface
class TemperatureAdapter {
  constructor(fahrenheitSensor) {
    this.fahrenheitSensor = fahrenheitSensor;
  }

  getTemperature() {
    const temperatureF = this.fahrenheitSensor.getTemperature();
    const temperatureC = (temperatureF - 32) * (5 / 9);
    return temperatureC.toFixed(2);
  }
}

// Usage
const fahrenheitSensor = new FahrenheitSensor();
const temperatureAdapter = new TemperatureAdapter(fahrenheitSensor);

console.log("Temperature in Celsius: " + temperatureAdapter.getTemperature());


/**
 * 
 * In this example, we have an FahrenheitSensor class that represents an incompatible interface, as it provides temperature readings in Fahrenheit. On the other hand, we have a CelsiusSensor class that represents a compatible interface, providing temperature readings in Celsius.

To bridge the gap between the incompatible interface (FahrenheitSensor) and the compatible interface (CelsiusSensor), we create an TemperatureAdapter class. This adapter class takes an instance of FahrenheitSensor in its constructor and implements the CelsiusSensor interface. It adapts the Fahrenheit temperature readings to Celsius by converting them in the getTemperature() method.

Finally, we create an instance of FahrenheitSensor and pass it to the TemperatureAdapter constructor. We can then use the TemperatureAdapter instance to get the temperature in Celsius, even though the underlying sensor provides temperature readings in Fahrenheit.

Note: This is a simplified example for illustrative purposes. In real-world scenarios, the Adapter pattern might involve more complex interactions and transformations between the incompatible and compatible interfaces.
 */