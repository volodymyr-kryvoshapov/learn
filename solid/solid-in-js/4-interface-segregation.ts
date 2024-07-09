// The Interface Segregation Principle (ISP)
// states that no client should be forced to depend on methods
// it does not use. It encourages the creation of smaller,
// more specific interfaces rather than larger, general-purpose ones.

// Scenario
// Let's consider a system that deals with different types
// of devices like printers and scanners. In an incorrect
// approach, we might have a single interface for all device
// functions, but this is not ideal because not all devices
// will use all the functions.

// TypeScript Code Example Not Adhering to ISP
// Here’s an example where a single Device interface is used
// for both printing and scanning functionalities, which is
// not suitable for devices that only support one of the functionalities.

interface Device {
  print(document: string): void;
  scan(document: string): void;
}

class Printer implements Device {
  print(document: string): void {
    console.log(`Printing: ${document}`);
  }

  scan(document: string): void {
    throw new Error("This device does not support scanning.");
  }
}

class Scanner implements Device {
  print(document: string): void {
    throw new Error("This device does not support printing.");
  }

  scan(document: string): void {
    console.log(`Scanning: ${document}`);
  }
}

function useDevice(device: Device, document: string): void {
  device.print(document);  // This might fail if the device does not support printing.
  device.scan(document);   // This might fail if the device does not support scanning.
}

// In this implementation, both Printer and Scanner classes
// are forced to implement methods they do not use,
// which is a clear violation of ISP.

// TypeScript Code Example Adhering to ISP
// A better approach would be to segregate the Device
// interface into smaller, more specific interfaces.

interface Printer {
  print(document: string): void;
}

interface Scanner {
  scan(document: string): void;
}

class SimplePrinter implements Printer {
  print(document: string): void {
    console.log(`Printing: ${document}`);
  }
}

class SimpleScanner implements Scanner {
  scan(document: string): void {
    console.log(`Scanning: ${document}`);
  }
}

class MultiFunctionPrinter implements Printer, Scanner {
  print(document: string): void {
    console.log(`Printing: ${document}`);
  }

  scan(document: string): void {
    console.log(`Scanning: ${document}`);
  }
}

function printDocument(printer: Printer, document: string): void {
  printer.print(document);
}

function scanDocument(scanner: Scanner, document: string): void {
  scanner.scan(document);
}

// Explanation
// - Printer and Scanner interfaces are defined separately,
// making each interface very specific to the functionality.
// - Devices that can print implement the Printer interface,
// and devices that can scan implement the Scanner interface.
// - MultiFunctionPrinter can implement both interfaces,
// demonstrating flexibility without forcing non-relevant methods onto single-function devices.

// This design adheres to the Interface Segregation
// Principle by ensuring that each class only needs
// to be concerned with the methods that are relevant
// to its function. It also enhances modularity and
// makes the system easier to understand, maintain,
// and expand.






