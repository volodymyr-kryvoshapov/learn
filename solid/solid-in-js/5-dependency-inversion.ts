// The Dependency Inversion Principle (DIP) is a key
// aspect of the SOLID principles, which emphasizes
// that high-level modules should not depend on
// low-level modules, but both should depend on
// abstractions. Furthermore, abstractions should
// not depend upon details; details should depend
// upon abstractions. This principle helps in reducing
// the coupling between code modules,
// enhancing flexibility and maintainability.

// Scenario
// Let's consider an application that sends notifications.
// In a poor design, the high-level notification logic might
// directly depend on specific low-level messaging implementations,
// like email or SMS services.

// Example Not Adhering to DIP
// Here’s an example where the high-level module (NotificationService)
// directly depends on low-level modules (EmailService and SMSService),
// which makes it hard to extend and manage:

class EmailService {
  sendEmail(message: string, to: string): void {
    console.log(`Sending email to ${to}: ${message}`);
  }
}

class SMSService {
  sendSMS(message: string, to: string): void {
    console.log(`Sending SMS to ${to}: ${message}`);
  }
}

class NotificationService {
  private emailService: EmailService;
  private smsService: SMSService;

  constructor() {
    this.emailService = new EmailService();
    this.smsService = new SMSService();
  }

  notifyByEmail(message: string, to: string): void {
    this.emailService.sendEmail(message, to);
  }

  notifyBySMS(message: string, to: string): void {
    this.smsService.sendSMS(message, to);
  }
}

// In this structure, NotificationService is tightly coupled with
// EmailService and SMSService. Any change in these services
// or addition of a new notification method requires modifications to NotificationService.

// TypeScript Code Example Adhering to DIP
// To adhere to the Dependency Inversion Principle,
// we should introduce an interface for notification and make
// the NotificationService depend on this interface rather than concrete classes:

interface INotification {
  send(message: string, to: string): void;
}

class EmailService implements INotification {
  send(message: string, to: string): void {
    console.log(`Sending email to ${to}: ${message}`);
  }
}

class SMSService implements INotification {
  send(message: string, to: string): void {
    console.log(`Sending SMS to ${to}: ${message}`);
  }
}

class NotificationService {
  private notificationService: INotification;

  constructor(notificationService: INotification) {
    this.notificationService = notificationService;
  }

  notify(message: string, to: string): void {
    this.notificationService.send(message, to);
  }
}

let emailService = new EmailService();
let smsService = new SMSService();

let emailNotification = new NotificationService(emailService);
emailNotification.notify("Hello via Email", "email@example.com");

let smsNotification = new NotificationService(smsService);
smsNotification.notify("Hello via SMS", "1234567890");

// Explanation
// - INotification is an interface that defines a standard send method.
// Both EmailService and SMSService implement this interface.
// - NotificationService is now dependent on the INotification
// interface (an abstraction), not on concrete details.
// This allows for easy addition of new notification methods
// without changing NotificationService.
// - You can switch between different notification strategies
// by simply passing a different implementation of INotification
// to the NotificationService constructor.


// This design adheres to the Dependency Inversion Principle,
// promoting loose coupling and making the system more flexible
// and easier to maintain. It allows adding new notification
// types without modifying existing classes, which is crucial
// for maintaining scalability in complex systems.


