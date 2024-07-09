// Scenario
// Imagine a system with various types of payment methods.
// The basic operation for any payment method is to process a payment,
// but not all payment methods handle refunds.

//   TypeScript Code Example Not Adhering to LSP
// Here, a PaymentMethod base class is used, and it includes both
// processPayment and processRefund methods. Not all payment methods
// (like a cash payment) might support refunds, which could lead
// to improper implementations.

abstract class PaymentMethod {
  abstract processPayment(amount: number): void;
  abstract processRefund(amount: number): void;
}

class CreditCardPayment extends PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
  }

  processRefund(amount: number): void {
    console.log(`Processing credit card refund of $${amount}`);
  }
}

class CashPayment extends PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing cash payment of $${amount}`);
  }

  processRefund(amount: number): void {
    throw new Error("Refunds are not supported for cash payments.");
  }
}

function processPayment(paymentMethod: PaymentMethod, amount: number): void {
  paymentMethod.processPayment(amount);
}

function processRefund(paymentMethod: PaymentMethod, amount: number): void {
  paymentMethod.processRefund(amount);
}

let creditCard = new CreditCardPayment();
let cash = new CashPayment();

processPayment(creditCard, 100);  // Works fine
processRefund(creditCard, 50);   // Works fine
processPayment(cash, 100);       // Works fine
processRefund(cash, 50);         // Throws an error

// In this code, using a CashPayment for refunds leads to a runtime error,
// violating LSP because not all PaymentMethod subclasses handle refunds.


// TypeScript Code Example Adhering to LSP
// To fix the violation, we should separate capabilities into
// different interfaces or abstract classes.

abstract class PaymentMethod {
  abstract processPayment(amount: number): void;
}

abstract class RefundablePaymentMethod extends PaymentMethod {
  abstract processRefund(amount: number): void;
}

class CreditCardPayment extends RefundablePaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
  }

  processRefund(amount: number): void {
    console.log(`Processing credit card refund of $${amount}`);
  }
}

class CashPayment extends PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing cash payment of $${amount}`);
  }
}

function processPayment(paymentMethod: PaymentMethod, amount: number): void {
  paymentMethod.processPayment(amount);
}

function processRefund(paymentMethod: RefundablePaymentMethod, amount: number): void {
  paymentMethod.processRefund(amount);
}

let creditCard = new CreditCardPayment();
let cash = new CashPayment();

processPayment(creditCard, 100);  // Works fine
processRefund(creditCard, 50);   // Works fine
processPayment(cash, 100);       // Works fine
// processRefund(cash, 50);       // Correctly identified by TypeScript as an error


// Explanation
// - PaymentMethod is now only responsible for processing payments.
// - RefundablePaymentMethod extends PaymentMethod and adds refund capabilities.
// - processRefund now only accepts RefundablePaymentMethod, ensuring that all passed instances support refunds.

// This setup adheres to the Liskov Substitution Principle
// by ensuring that subclasses can replace their superclass
// without introducing errors or unexpected behavior.