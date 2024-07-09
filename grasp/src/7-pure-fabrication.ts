// 7. Pure Fabrication
// Create a class that does not represent a concept in the problem domain to achieve low coupling, high cohesion, or reuse.

class Logger {
  log(message: string): void {
    console.log(message);
  }
}

class Order {
  private items: Item[];
  private logger: Logger;

  constructor(items: Item[], logger: Logger) {
    this.items = items;
    this.logger = logger;
  }

  calculateTotal(): number {
    const total = this.items.reduce((total, item) => total + item.price, 0);
    this.logger.log(`Order total calculated: ${total}`);
    return total;
  }
}

const logger = new Logger();
const order = new Order([new Item('Book', 20), new Item('Pen', 2)], logger);
order.calculateTotal(); // Output: Order total calculated: 22

// Please describe in more details 7. Pure Fabrication based on example above

// Pure Fabrication is a design principle that suggests creating a class that does not represent a concept from the problem domain (the real-world entities your application is modeling) but is instead created purely to achieve specific design goals such as reducing coupling, increasing cohesion, or improving code reuse.

// Benefits of Pure Fabrication
// - Increased Cohesion: By isolating responsibilities into a new class, you make each class more focused on a single responsibility.
// - Reduced Coupling: By creating a new class to handle certain tasks, you can decouple the system components more effectively.
// - Reusability: The fabricated class can be reused in different parts of the system or even in different projects.

// Example: Logging in Order Processing
// In the above example, we introduced a Logger class to handle logging responsibilities. This is a pure fabrication because logging is not part of the problem domain of order processing but a utility to aid in debugging and monitoring.

// Detailed Breakdown of the Example
// 1. Without Pure Fabrication (Logging directly in the Order class):

class Order {
  private items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  calculateTotal(): number {
    const total = this.items.reduce((sum, item) => sum + item.price, 0);
    console.log(`Order total calculated: ${total}`);
    return total;
  }
}

const order = new Order([new Item('Book', 20), new Item('Pen', 2)]);
order.calculateTotal(); // Output: Order total calculated: 22

// Problems:

// - Low Cohesion: The Order class is now responsible for both calculating the total and logging, mixing business logic with logging logic.
// - High Coupling: Changes in logging requirements (e.g., switching to a different logging framework) will require changes in the Order class.

// 2. With Pure Fabrication (Using a Logger class):

// Item class definition
class Item {
  constructor(public name: string, public price: number) {}
}

// Logger class is a pure fabrication
class Logger {
  log(message: string): void {
    console.log(message);
  }
}

// Order class with logging responsibility delegated to Logger
class Order {
  private items: Item[];
  private logger: Logger;

  constructor(items: Item[], logger: Logger) {
    this.items = items;
    this.logger = logger;
  }

  calculateTotal(): number {
    const total = this.items.reduce((sum, item) => sum + item.price, 0);
    this.logger.log(`Order total calculated: ${total}`);
    return total;
  }
}

// Example usage
const logger = new Logger();
const order = new Order([new Item('Book', 20), new Item('Pen', 2)], logger);
order.calculateTotal(); // Output: Order total calculated: 22

// Benefits:

// - High Cohesion: The Order class is now solely responsible for order-related logic, while the Logger class handles all logging-related tasks.
// - Low Coupling: The Order class no longer depends on the logging implementation. If you need to change the logging mechanism, you only need to modify the Logger class.

// Further Enhancing the Logger
// To make the Logger class even more versatile, you might add different logging levels or support for multiple logging outputs (console, file, etc.).

class Logger {
  log(message: string): void {
    console.log(message);
  }

  error(message: string): void {
    console.error(message);
  }

  info(message: string): void {
    console.info(message);
  }
}

class Order {
  private items: Item[];
  private logger: Logger;

  constructor(items: Item[], logger: Logger) {
    this.items = items;
    this.logger = logger;
  }

  calculateTotal(): number {
    const total = this.items.reduce((sum, item) => sum + item.price, 0);
    this.logger.info(`Order total calculated: ${total}`);
    return total;
  }
}

const logger = new Logger();
const order = new Order([new Item('Book', 20), new Item('Pen', 2)], logger);
order.calculateTotal(); // Output: Order total calculated: 22

// Conclusion
// Pure Fabrication is a powerful principle for designing flexible and maintainable systems. By creating utility classes that handle specific concerns, you can keep your business logic classes clean and focused, reduce dependencies, and enhance reusability. This approach leads to a more modular, testable, and scalable codebase.

