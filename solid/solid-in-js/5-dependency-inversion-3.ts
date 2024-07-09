// TypeScript Code Example Not Adhering to DIP

class TechnicalSupport {
  handleIssue(issueDetails: string): void {
    console.log(`Handling technical issue: ${issueDetails}`);
  }
}

class BillingSupport {
  handleIssue(issueDetails: string): void {
    console.log(`Handling billing issue: ${issueDetails}`);
  }
}

class ShippingSupport {
  handleIssue(issueDetails: string): void {
    console.log(`Handling shipping issue: ${issueDetails}`);
  }
}

class CustomerService {
  private techSupport: TechnicalSupport;
  private billingSupport: BillingSupport;
  private shippingSupport: ShippingSupport;

  constructor() {
    this.techSupport = new TechnicalSupport();
    this.billingSupport = new BillingSupport();
    this.shippingSupport = new ShippingSupport();
  }

  resolveIssue(issueType: string, issueDetails: string): void {
    switch (issueType) {
      case 'technical':
        this.techSupport.handleIssue(issueDetails);
        break;
      case 'billing':
        this.billingSupport.handleIssue(issueDetails);
        break;
      case 'shipping':
        this.shippingSupport.handleIssue(issueDetails);
        break;
      default:
        console.log("Invalid issue type provided.");
        break;
    }
  }
}


// TypeScript Code Example Adhering to DIP

interface IIssueHandler {
  handleIssue(issueDetails: string): void;
}

class TechnicalSupport implements IIssueHandler {
  handleIssue(issueDetails: string): void {
    console.log(`Handling technical issue: ${issueDetails}`);
  }
}

class BillingSupport implements IIssueHandler {
  handleIssue(issueDetails: string): void {
    console.log(`Handling billing issue: ${issueDetails}`);
  }
}

class ShippingSupport implements IIssueHandler {
  handleIssue(issueDetails: string): void {
    console.log(`Handling shipping issue: ${issueDetails}`);
  }
}

class CustomerService {
  private issueHandler: Map<string, IIssueHandler>;

  constructor() {
    this.issueHandler = new Map<string, IIssueHandler>();
    this.issueHandler.set('technical', new TechnicalSupport());
    this.issueHandler.set('billing', new BillingSupport());
    this.issueHandler.set('shipping', new ShippingSupport());
  }

  resolveIssue(issueType: string, issueDetails: string): void {
    if (this.issueHandler.has(issueType)) {
      const handler = this.issueHandler.get(issueType);
      handler?.handleIssue(issueDetails);
    } else {
      console.log("Invalid issue type provided.");
    }
  }
}

// Explanation
// - IIssueHandler is an interface defining a method for handling issues.
// Different support classes implement this interface.
// - CustomerService uses a Map to associate issue types with their
// respective handlers, adhering to DIP by depending on an abstraction
// rather than concrete classes.
// - This design allows for easy addition of new issue types and
// handling strategies without modifying the CustomerService class,
// facilitating easier maintenance and expansion.

// This refactored example follows the Dependency Inversion Principle,
// enhancing the system's modularity and testability while reducing its coupling.
// This makes the system much more adaptable to changes, such as introducing
// new types of customer support without disrupting existing code.