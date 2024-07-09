// Please explain in more details topic 6. Polymorphism. It looks very similar to 9. Protected Variations. 

// Polymorphism and Protected Variations are both fundamental principles in object-oriented design, but they serve different purposes and are applied in different contexts.

// 6. Polymorphism
// Polymorphism allows objects of different classes to be treated as objects of a common super class. It is achieved through inheritance and interfaces, enabling a single interface to represent different underlying forms (data types). The main advantage is the ability to call methods on objects without knowing their exact types at compile time.

// Key Concepts of Polymorphism
// - Subtyping: A subclass can be treated as an instance of its superclass.
// - Dynamic Method Dispatch: The method that is invoked is determined at runtime based on the actual object type.
// - Code Reuse and Extensibility: New subclasses can be introduced without altering existing code.

// Example: Payment Processing
// In the previous example, we used polymorphism to handle different payment methods.

// Define an interface for PaymentMethod
interface PaymentMethod {
  pay(amount: number): void;
}

// Implement CreditCardPayment method
class CreditCardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

// Implement PayPalPayment method
class PayPalPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal`);
  }
}

// Order class that uses PaymentMethod interface
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

// Example usage
const order = new Order([new Item('Book', 20), new Item('Pen', 2)]);
const paymentMethod = new CreditCardPayment();
order.pay(paymentMethod); // Output: Paid 22 using Credit Card

// Benefits of Polymorphism:

// 1. Extensibility: New payment methods can be added by implementing the PaymentMethod interface without modifying the Order class.
// 2. Code Reuse: The Order class can use any payment method that conforms to the PaymentMethod interface, promoting code reuse.
// 3. Flexibility: The Order class can dynamically decide which payment method to use at runtime.

// 9. Protected Variations
// Protected Variations is about shielding parts of the system from the impact of changes in other parts by encapsulating the variations. It focuses on identifying points of likely variation and using abstraction to protect the rest of the system from changes.

// Key Concepts of Protected Variations
// - Encapsulation: Hide the details of the parts of the system that are likely to change.
// - Stable Interfaces: Use interfaces or abstract classes to define contracts that hide implementation details.
// - Isolation: Changes in one part of the system should not propagate to other parts.

// Example: Shipping Strategy
// Using the shipping strategy example, we protect the Order class from changes in shipping cost calculation by encapsulating the logic in a strategy interface.

// Define a ShippingStrategy interface
interface ShippingStrategy {
  calculateShipping(cost: number): number;
}

// Implement StandardShipping strategy
class StandardShipping implements ShippingStrategy {
  calculateShipping(cost: number): number {
    return cost + 5; // Flat rate shipping
  }
}

// Implement ExpressShipping strategy
class ExpressShipping implements ShippingStrategy {
  calculateShipping(cost: number): number {
    return cost + 10; // Express shipping
  }
}

// Order class that uses ShippingStrategy interface
class Order {
  private items: Item[];
  private shippingStrategy: ShippingStrategy;

  constructor(items: Item[], shippingStrategy: ShippingStrategy) {
    this.items = items;
    this.shippingStrategy = shippingStrategy;
  }

  calculateTotal(): number {
    const itemTotal = this.items.reduce((total, item) => total + item.price, 0);
    return this.shippingStrategy.calculateShipping(itemTotal);
  }
}

// Example usage
const standardShipping = new StandardShipping();
const order = new Order([new Item('Book', 20), new Item('Pen', 2)], standardShipping);
console.log(order.calculateTotal()); // Output: 27

// Benefits of Protected Variations:

// 1. Decoupling: The Order class is decoupled from the details of shipping cost calculation.
// 2. Maintainability: Changes in shipping calculation logic do not require changes in the Order class.
// 3. Flexibility: New shipping strategies can be introduced without affecting the existing system.

// Differences and Overlap
// - Polymorphism focuses on enabling different behaviors through a common interface. It's about treating different objects through a common interface or superclass, promoting flexibility and reuse.
// - Protected Variations is about identifying points where the system is likely to change and protecting other parts of the system from these changes by using stable interfaces and encapsulation.

// Similarities
// - Both use interfaces or abstract classes to define stable contracts that hide implementation details.
// - Both aim to increase flexibility and maintainability by decoupling different parts of the system.

// In summary, while Polymorphism is primarily about enabling different behaviors through a common interface, Protected Variations is about encapsulating variability to protect the system from changes. Both principles leverage abstraction but are applied with different goals in mind.