// 3. Controller
// Assign the responsibility of handling a system event to a class that represents the overall system, a use case scenario, or a session.

class OrderController {
  createOrder(items: Item[]): Order {
    return new Order(items);
  }

  getTotal(order: Order): number {
    return order.calculateTotal();
  }
}

const orderController = new OrderController();
const order = orderController.createOrder([new Item('Book', 20), new Item('Pen', 2)]);
console.log(orderController.getTotal(order)); // Output: 22

// The Controller pattern in GRASP is about assigning the responsibility for handling system events to a non-UI class. This pattern helps in separating the user interface (UI) logic from the business logic, which leads to a more modular, maintainable, and testable codebase.

// Key Responsibilities of a Controller
// 1. Receive Input: It receives input from the UI or other external sources.
// 2. Process Requests: It processes these inputs, which often involves validation and transformation.
// 3. Interact with Model: It coordinates actions between the model (business logic and data) and the UI.
// 4. Update View: It updates the view with new information or changes resulting from the processed input.

// Choosing a Controller
// A controller should be chosen based on the following guidelines:

// - Use Case Controller: Assign responsibility to a controller representing a use case or user session. This controller manages the sequence of actions for that specific use case.
// - Role-based Controller: Assign responsibility to a controller representing a specific role in the application, such as OrderController, UserController, etc.

// Example: Online Store
// Let's consider a simple online store with the following components:

// 1. Model: Represents the business logic and data. For example, Order, Product, User.
// 2. View: Represents the user interface, such as HTML/CSS for web applications.
// 3. Controller: Manages the interaction between the view and the model.

// Components and Their Interactions
// 1. Model Classes

class Product {
  constructor(public id: number, public name: string, public price: number) {}
}

class Order {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  calculateTotal(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}

// 2. Controller Class
// The OrderController class handles user actions related to orders.

class OrderController {
  private order: Order;

  constructor() {
    this.order = new Order();
  }

  addProductToOrder(product: Product): void {
    this.order.addProduct(product);
    console.log(`Product ${product.name} added to the order.`);
  }

  checkout(): void {
    const total = this.order.calculateTotal();
    console.log(`The total amount for your order is $${total}.`);
  }
}

// Example Usage

const controller = new OrderController();

const product1 = new Product(1, 'Book', 20);
const product2 = new Product(2, 'Pen', 2);

controller.addProductToOrder(product1); // Output: Product Book added to the order.
controller.addProductToOrder(product2); // Output: Product Pen added to the order.

controller.checkout(); // Output: The total amount for your order is $22.


// Detailed Breakdown

// 1. Receive Input:
// The OrderController has methods like addProductToOrder and checkout that are called based on user actions (e.g., adding products to an order, checking out).

// 2. Process Requests:
// The controller processes the request, such as validating the product being added to the order.

// 3. Interact with Model:
// The controller interacts with the Order model to add products and calculate the total order amount.

// 4. Update View:
// In this simplified example, updating the view is represented by logging messages to the console. In a real application, the controller would update the user interface accordingly.

// Controller in a Web Application
// In a web application, the controller often handles HTTP requests. Here’s an example using Express.js (a popular Node.js web framework) to illustrate a more realistic scenario.

// Express.js Controller

import express, { Request, Response } from 'express';

class OrderController {
  private order: Order;

  constructor() {
    this.order = new Order();
  }

  addProductToOrder(req: Request, res: Response): void {
    const { id, name, price } = req.body;
    const product = new Product(id, name, price);
    this.order.addProduct(product);
    res.send(`Product ${name} added to the order.`);
  }

  checkout(req: Request, res: Response): void {
    const total = this.order.calculateTotal();
    res.send(`The total amount for your order is $${total}.`);
  }
}

const app = express();
app.use(express.json());

const orderController = new OrderController();

app.post('/order/add', (req, res) => orderController.addProductToOrder(req, res));
app.get('/order/checkout', (req, res) => orderController.checkout(req, res));

app.listen(3000, () => console.log('Server running on port 3000'));


// Benefits of Using Controllers
// 1. Separation of Concerns: By separating UI logic from business logic, you make the codebase more modular and easier to manage.
// 2. Maintainability: Changes in the business logic do not directly impact the UI code and vice versa.
// 3. Testability: Controllers can be independently tested without relying on the actual UI.
// 4. Reusability: Business logic encapsulated in controllers can be reused across different parts of the application.

// Conclusion
// The Controller pattern in GRASP is a crucial design principle that helps in organizing the codebase by separating responsibilities. It acts as an intermediary that processes input, coordinates actions, updates the model, and updates the view. This separation of concerns leads to a more organized, maintainable, and testable codebase.
