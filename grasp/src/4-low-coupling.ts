// 4. Low Coupling (слабке зчеплення, слабое зацепление)
// Keep the coupling between objects low to reduce the impact of changes in one object on others.

class EmailService {
  sendEmail(order: Order): void {
    console.log(`Email sent for order with total: ${order.calculateTotal()}`);
  }
}

class OrderProcessor {
  constructor(private emailService: EmailService) {}

  processOrder(order: Order): void {
    // Process the order
    this.emailService.sendEmail(order);
  }
}

const emailService = new EmailService();
const orderProcessor = new OrderProcessor(emailService);
orderProcessor.processOrder(order); // Output: Email sent for order with total: 22
