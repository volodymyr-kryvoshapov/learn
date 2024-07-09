# GoF Patterns

https://www.youtube.com/watch?v=7TjzsZCQQqg

1. Creational
   - **Singleton** (Already embedded in language. We can implement it using module pattern. Create an instance in module and export it. Module will be loaded only once and will include in all files same instance. We can also use class with static property to store instance.)
   - **Factory Method** (We can use it to create instances of different classes that implement the same interface.)
   - Abstract Factory
   - Builder
   - **Prototype** (Already embedded in language. Prototype programminfg is a feature of JS)

2. Structural
   - **Adapter** (Already embedded in JS. Promisify and Callbackify functions in node utils. Input - one interface and output - another interface. Example function that transforms contract 'callback last error first' into 'promise'.)
   - Bridge
   - Composite
   - **Decorator** (Common used in Nestjs. Allowed reduce inheritance and use composition instead. We can use it to add additional functionality to the class. For example Validation decorators like Pipline, Body, Query, Param, etc.)
   - **Facade** (That main idea is to hide several abstractions of the system behind one class. For example, we have a system with 20 classes by handling excel and one class that expose only two methods export and import. Or we have 20 reports generator classes and only one facade class that accept options and generate reports. Facade is a simplification of the system - it more user-friendly and easy then call to all 20 abstraction classes.)
   - Flyweight
   - **Proxy** (Embedded in JS)

3. Behavioral
    - **Chain of Responsibility** (Middlewares in node.js, Express.js. We have chains that executed one after another and switch responsibility between them.)
    - Command
    - Interpreter
    - **Iterator** (Already embedded in JS. We do not need to implement it. We can use symbol iterator)
    - Mediator
    - Memento
    - **Observer** (Already embedded in JS. On backend we can use EventEmitter (on class), on frontend we can use EventTarget (two classes, subscribe and emit). - simple realisation of Observer pattern)
    - State
    - **Strategy** (Examples: collection of endpoints handlers; collection of serializers where key is serialization alghoritm (xml, json, yml, etc.); cache strategy in memory, redis, etc. so collection of different cache types; Common principle - select strategy from collection by name where key - is the name of the strategy and value - the strategy itself, function or class with same contract or factory.)
    - Template Method
    - Visitor

4. Concurrency
    - Active Object
    - Balking
    - Binding Properties
    - Double-Checked Locking
    - Guarded Suspension
    - Join
    - Lock
    - Messaging Design Pattern
    - Monitor Object
    - Reactor
    - Read-Write Lock
    - Scheduler
    - Thread Pool
    - Thread-Specific Storage
    - Thread-Safe Interface