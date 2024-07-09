// 1. Information Expert
// Assign the responsibility to the class that has the necessary information to fulfill it.

class Order {
  private items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

class Item {
  constructor(public name: string, public price: number) {}
}

const order = new Order([new Item('Book', 20), new Item('Pen', 2)]);
console.log(order.calculateTotal()); // Output: 22

// What does mean necessary information to fulfill it?

// 1. What is the task?
// - Calculate the total price of all items in an order.

// 2. What information is necessary to fulfill this task?
// - The list of items in the order.

// 3. The price of each individual item.
// - Which class has this necessary information?

// 4. The Order class has the list of items (items array).
// - Each Item object contains its own price.

// By ensuring that the calculateTotal method is in the Order class, we place the calculation responsibility with the class that has all necessary information directly at hand (the items and their prices), thus adhering to the Information Expert principle. This approach minimizes dependencies, avoids unnecessary coupling, and results in a clear and maintainable object-oriented design.