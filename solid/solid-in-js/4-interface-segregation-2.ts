// Let's examine the Interface Segregation Principle (ISP)
// through the lens of a user management system where we
// have different types of users who can perform various
// operations such as accessing system resources, managing
// user details, and handling administrative tasks.

// Scenario
// In an incorrect setup, one might define a single large
// interface for all types of user operations. This forces
// implementers to handle methods they might not need. The
// correct approach is to break down this large interface
// into smaller, more relevant interfaces.

// TypeScript Code Example Not Adhering to ISP
// In this example, a single UserOperations interface
// includes multiple operations that not all user types require:

interface UserOperations {
  login(): void;
  logout(): void;
  viewProfile(): void;
  editProfile(): void;
  deleteUser(user: string): void;
  addUser(user: string): void;
}

class StandardUser implements UserOperations {
  login(): void {
    console.log("User logged in");
  }

  logout(): void {
    console.log("User logged out");
  }

  viewProfile(): void {
    console.log("Viewing profile");
  }

  editProfile(): void {
    console.log("Editing profile");
  }

  deleteUser(user: string): void {
    throw new Error("Standard user cannot delete users.");
  }

  addUser(user: string): void {
    throw new Error("Standard user cannot add users.");
  }
}

class AdminUser implements UserOperations {
  login(): void {
    console.log("Admin logged in");
  }

  logout(): void {
    console.log("Admin logged out");
  }

  viewProfile(): void {
    console.log("Viewing profile");
  }

  editProfile(): void {
    console.log("Editing profile");
  }

  deleteUser(user: string): void {
    console.log(`Deleting user: ${user}`);
  }

  addUser(user: string): void {
    console.log(`Adding user: ${user}`);
  }
}

// In this structure, StandardUser is forced to implement
// methods like deleteUser and addUser, which are irrelevant
// for standard users and could lead to runtime errors.

// TypeScript Code Example Adhering to ISP
// A better approach involves creating specific interfaces
// that align with the responsibilities relevant to each type of user:

interface LoginLogout {
  login(): void;
  logout(): void;
}

interface UserProfile {
  viewProfile(): void;
  editProfile(): void;
}

interface UserManagement {
  addUser(user: string): void;
  deleteUser(user: string): void;
}

class StandardUser implements LoginLogout, UserProfile {
  login(): void {
    console.log("User logged in");
  }

  logout(): void {
    console.log("User logged out");
  }

  viewProfile(): void {
    console.log("Viewing profile");
  }

  editProfile(): void {
    console.log("Editing profile");
  }
}

class AdminUser implements LoginLogout, UserProfile, UserManagement {
  login(): void {
    console.log("Admin logged in");
  }

  logout(): void {
    console.log("Admin logged out");
  }

  viewProfile(): void {
    console.log("Viewing profile");
  }

  editProfile(): void {
    console.log("Editing profile");
  }

  addUser(user: string): void {
    console.log(`Adding user: ${user}`);
  }

  deleteUser(user: string): void {
    console.log(`Deleting user: ${user}`);
  }
}

// Explanation
// - The LoginLogout and UserProfile interfaces cover
// the basic operations that any user might need.
// - The UserManagement interface includes administrative
// tasks that only admin users should perform.
// - This structure ensures that standard users are not
// burdened with methods they don't need, adhering to ISP.
// Admin users, capable of more actions, implement additional
// interfaces as required.

// This approach aligns well with ISP, ensuring modular,
// maintainable, and scalable code by assigning specific
// responsibilities to specific interfaces tailored to
// the needs of various user types.

