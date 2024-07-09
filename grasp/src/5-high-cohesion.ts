// 5. High Cohesion (сильна згуртованість, сильная связность)
// Keep related behavior in a single class to increase the usability and understandability of the code.

class Order {
  private items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

const order = new Order([new Item('Book', 20)]);
order.addItem(new Item('Pen', 2));
console.log(order.calculateTotal()); // Output: 22