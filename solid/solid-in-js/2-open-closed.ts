// Open-Closed Principle (O)

// Its definition holds that software entities (classes,
// modules, functions, etc.) should be open for extension,
// but closed for modification.

// Problem Scenario
// Suppose we have a system that logs messages.
// Initially, it only supports logging messages to the console.
// As the system grows, we need to support logging to other outputs like files or over the network.

// Initial Implementation (Not adhering to the Open-Closed Principle)
class Logger {
  constructor() {
    this.logType = 'console'; // default log type
  }

  log(message) {
    if (this.logType === 'console') {
      console.log(message);
    } else if (this.logType === 'file') {
      // Log to a file (hypothetical implementation)
      fs.writeFileSync('log.txt', message + '\n', { flag: 'a' });
    }
    // Each new log type requires modifying this method
  }
}

// In this initial implementation, the Logger class needs to be modified
// every time a new logging method is introduced, which violates the Open-Closed Principle.

// Improved Implementation (Adhering to the Open-Closed Principle)
// To adhere to the Open-Closed Principle, we can define a logging interface and implement different logging strategies:

interface LogStrategy {
  log(message: string): void;
}

class ConsoleLogger implements LogStrategy {
  log(message) {
    console.log(message);
  }
}

class FileLogger implements LogStrategy {
  log(message) {
    fs.writeFileSync('log.txt', message + '\n', { flag: 'a' });
  }
}

class NetworkLogger implements LogStrategy {
  log(message) {
    // Hypothetical example of sending a log message over the network
    fetch('http://api.myapp.com/log', {
      method: 'POST',
      body: JSON.stringify({ message: message }),
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

class Logger {
  private strategy: LogStrategy;

  constructor(strategy: LogStrategy) {
    this.strategy = strategy;
  }

  log(message) {
    this.strategy.log(message);
  }
}

let consoleLogger = new Logger(new ConsoleLogger());
consoleLogger.log('This is a console log message.');

let fileLogger = new Logger(new FileLogger());
fileLogger.log('This is a file log message.');

let networkLogger = new Logger(new NetworkLogger());
networkLogger.log('This is a network log message.');

// In this improved implementation:

// - The Logger class is closed for modification because
// you don't need to change it to add new types of logging.
// - It is open for extension because you can introduce new
// logging behaviors by creating new classes that implement
// the logging method defined by the strategy.

// This setup adheres to the Open-Closed Principle by allowing
// new functionality to be added with minimal changes to existing code.