// 6. Polymorphism
// Use polymorphism to handle variations in behavior based on the type of object.
// Different behaviors through a common interface

interface PaymentMethod {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

class PayPalPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal`);
  }
}

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

const order = new Order([new Item('Book', 20), new Item('Pen', 2)]);
const paymentMethod = new CreditCardPayment();
order.pay(paymentMethod); // Output: Paid 22 using Credit Card
