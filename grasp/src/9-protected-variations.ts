// 9. Protected Variations
// Protect elements from the variations in other elements by encapsulating the volatile parts.

// Define an interface for the shipping strategy
interface ShippingStrategy {
  calculateShipping(cost: number): number;
}

// Implement a standard shipping strategy
class StandardShipping implements ShippingStrategy {
  calculateShipping(cost: number): number {
    return cost + 5; // Flat rate shipping
  }
}

// Implement an express shipping strategy
class ExpressShipping implements ShippingStrategy {
  calculateShipping(cost: number): number {
    return cost + 10; // Express shipping
  }
}

// Order class that uses a shipping strategy
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

// What exactly we protecting in 9. Protected Variations?

// In the context of the "Protected Variations" principle, we are protecting elements of the system from the impact of changes in other elements. This is achieved by encapsulating the parts of the system that are likely to change behind a stable interface or abstraction. By doing this, variations or changes in one part of the system do not ripple through and negatively affect other parts of the system.

// Key Concepts of Protected Variations
// 1. Encapsulation: Hide the parts of the system that are likely to change behind a stable interface.
// 2. Abstraction: Use abstract interfaces or base classes to define contracts that different implementations must adhere to.
// 3. Decoupling: Reduce dependencies between components to minimize the impact of changes.

// Example: Shipping Strategy
// In the example provided earlier, we protected the calculation of shipping costs from variations by using a ShippingStrategy interface. This way, changes in how shipping costs are calculated do not affect the rest of the Order class or other parts of the system that depend on it.

// What is Being Protected?
// 1. Order Class from Shipping Variations: The Order class does not need to know the details of how shipping costs are calculated. It relies on the ShippingStrategy interface to handle that. This means that if the way shipping costs are calculated changes (e.g., new shipping strategies are introduced or existing ones are modified), the Order class remains unaffected.

// 2. Clients from Internal Changes: Any client code using the Order class is protected from changes in shipping cost calculation logic. They can switch between different shipping strategies without any changes to their interaction with the Order class.

// 3. Future Variations: By encapsulating the shipping calculation logic behind an interface, we make it easier to introduce new shipping strategies in the future without affecting the existing system.

// Benefits of Protected Variations
// 1. Flexibility: Easily introduce new variations without modifying existing code.
// 2. Maintainability: Changes in one part of the system do not cause a chain reaction of changes in other parts.
// 3. Extensibility: Adding new functionality becomes simpler because the variation points are well-defined and encapsulated.

// In summary, "Protected Variations" is about anticipating where changes are likely to occur and encapsulating those changes behind stable interfaces to protect the rest of the system from their impact.