// 8. Indirection
// Introduce an intermediate class to mediate between other classes to reduce the coupling between them.

class PaymentProcessor {
  process(paymentMethod: PaymentMethod, amount: number): void {
    paymentMethod.pay(amount);
  }
}

class Order {
  private items: Item[];
  private paymentProcessor: PaymentProcessor;

  constructor(items: Item[], paymentProcessor: PaymentProcessor) {
    this.items = items;
    this.paymentProcessor = paymentProcessor;
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  pay(paymentMethod: PaymentMethod): void {
    const total = this.calculateTotal();
    this.paymentProcessor.process(paymentMethod, total);
  }
}

const paymentProcessor = new PaymentProcessor();
const order = new Order([new Item('Book', 20), new Item('Pen', 2)], paymentProcessor);
const paymentMethod = new CreditCardPayment();
order.pay(paymentMethod); // Output: Paid 22 using Credit Card

// In point 8. Indirection why we need intermediate class it looks like useless?

// The principle of Indirection in software design introduces an intermediate class to mediate between other classes. While it may initially appear unnecessary, it serves several important purposes:

// 1. Decoupling: It reduces the direct dependencies between classes, allowing for more flexible and maintainable code.
// 2. Single Responsibility: It adheres to the Single Responsibility Principle by ensuring that each class has a specific responsibility.
// 3. Reusability: It promotes code reuse by allowing the intermediate class to be used in different contexts without altering the core classes.
// 4. Flexibility: It makes it easier to change or extend the behavior of the system without modifying existing classes.

// Example: Payment Processing
// Let's elaborate on the example given earlier to highlight the benefits of using an intermediate class.

// Without Indirection:

class Order {
  private items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  pay(paymentMethod: PaymentMethod): void {
    const total = this.calculateTotal();
    paymentMethod.pay(total);
  }
}

interface PaymentMethod {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

const order = new Order([new Item('Book', 20), new Item('Pen', 2)]);
const paymentMethod = new CreditCardPayment();
order.pay(paymentMethod); // Output: Paid 22 using Credit Card

// In this case, the Order class is directly responsible for handling the payment, which couples it to the PaymentMethod interface.

// With Indirection:

class PaymentProcessor {
  process(paymentMethod: PaymentMethod, amount: number): void {
    paymentMethod.pay(amount);
  }
}

class Order {
  private items: Item[];
  private paymentProcessor: PaymentProcessor;

  constructor(items: Item[], paymentProcessor: PaymentProcessor) {
    this.items = items;
    this.paymentProcessor = paymentProcessor;
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  pay(paymentMethod: PaymentMethod): void {
    const total = this.calculateTotal();
    this.paymentProcessor.process(paymentMethod, total);
  }
}

interface PaymentMethod {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

const paymentProcessor = new PaymentProcessor();
const order = new Order([new Item('Book', 20), new Item('Pen', 2)], paymentProcessor);
const paymentMethod = new CreditCardPayment();
order.pay(paymentMethod); // Output: Paid 22 using Credit Card

// Benefits of the Intermediate Class (PaymentProcessor):

// 1. Decoupling: The Order class is no longer directly coupled to the PaymentMethod interface. It depends on the PaymentProcessor to handle the payment processing, making the Order class simpler and more focused on its primary responsibility.

// 2. Single Responsibility: The responsibility of processing payments is moved to the PaymentProcessor class, adhering to the Single Responsibility Principle. This makes both the Order and PaymentProcessor classes easier to understand and maintain.

// 3. Flexibility: If you need to change the way payments are processed, you only need to modify the PaymentProcessor class. For example, you might want to add logging, handle multiple payment methods in a specific way, or introduce new payment processing rules without changing the Order class.

// 4. Testing: The PaymentProcessor class can be independently tested, making it easier to write unit tests for different payment processing scenarios.

// 5. Extensibility: If new payment methods are introduced, or if the payment processing logic changes, you can extend the PaymentProcessor class without altering the Order class. This makes the system more modular and easier to extend.

// Conclusion
// While introducing an intermediate class may seem like an added complexity, it actually simplifies the design by decoupling responsibilities, promoting single responsibility, and increasing flexibility and maintainability. This indirection can be especially beneficial in larger systems where changes in one part should not ripple through and impact other parts.