// 2. Creator
// Assign the responsibility of creating (and removing, clear memory) an instance of a class to the class that has the information needed to create the instance.

// Assign responsibility for creating an instance of class A to class B if one or more of the following is true:
// - B aggregates A objects.
// - B contains A objects.
// - B closely uses A objects.
// - B has the initializing data that will be passed to A when it is created.

class Customer {
  createOrder(items: Item[]): Order {
    return new Order(items);
  }
}

const customer = new Customer();
const order = customer.createOrder([new Item('Book', 20), new Item('Pen', 2)]);