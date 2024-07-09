// Liskov Substitution Principle (L)
// states that objects of a superclass should be replaceable
// with objects of its subclasses without affecting the correctness
// of the program. This principle is named after Barbara Liskov,
// who introduced it in a 1987 conference keynote.

  // Problem Scenario
// Let's consider a class hierarchy where a base class Bird
// has a subclass Duck. If we add another subclass Penguin,
// which cannot fly, this might lead to incorrect behaviors
// if flying behavior is expected from all subclasses of Bird.

// TypeScript Code Example Not Adhering to LSP
class Bird {
  fly(): void {
    console.log("This bird is flying!");
  }
}

class Duck extends Bird {
  quack(): void {
    console.log("Quack quack!");
  }
}

class Penguin extends Bird {
  fly(): void {
    throw new Error("Cannot fly!");
  }

  swim(): void {
    console.log("This penguin can swim!");
  }
}

function makeBirdFly(bird: Bird): void {
  bird.fly();
}

let duck = new Duck();
let penguin = new Penguin();

makeBirdFly(duck);       // Works fine
makeBirdFly(penguin);    // Throws an error

// In this code, using a Penguin object in place of a Bird
// leads to runtime errors, violating LSP because not all Bird can actually fly.


// Code Example Adhering to LSP
// To adhere to LSP, we should refactor the hierarchy
// so that subclasses can seamlessly replace their superclass.

abstract class Bird {
  abstract makeSound(): void;
}

abstract class FlyingBird extends Bird {
  fly(): void {
    console.log("This bird is flying!");
  }
}

abstract class SwimmingBird extends Bird {
  swim(): void {
    console.log("This bird can swim!");
  }
}

class Duck extends FlyingBird {
  makeSound(): void {
    console.log("Quack quack!");
  }
}

class Penguin extends SwimmingBird {
  makeSound(): void {
    console.log("Squawk!");
  }
}

function makeBirdFly(bird: FlyingBird): void {
  bird.fly();
}

function makeBirdSwim(bird: SwimmingBird): void {
  bird.swim();
}

let duck = new Duck();
let penguin = new Penguin();

makeBirdFly(duck);       // Works fine
makeBirdSwim(penguin);   // Works fine

// Explanation

// - Bird is an abstract class, ensuring that subclasses must
// implement their specific behaviors like makeSound.
// - Separation into FlyingBird and SwimmingBird abstract
// classes allows us to clearly distinguish between birds
// that can fly and those that can swim. This avoids situations
// where a bird is incorrectly assumed to be able to fly.
// - makeBirdFly only accepts FlyingBird, ensuring that all
// passed instances can fly, adhering to LSP.
