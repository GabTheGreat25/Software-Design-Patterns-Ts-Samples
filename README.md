# Design Patterns Overview

This document provides a detailed overview of key design patterns utilized in software development. Understanding these patterns enhances code organization, promotes reusability, and improves maintainability. Below are descriptions of each creational pattern, highlighting their purposes and use cases.

## Creational Patterns

### 1. Factory Method

The **Factory Method** pattern is centered around creating objects without explicitly specifying the exact class of the object that will be instantiated. Instead, a creator class defines a method that returns new instances of a product. This approach promotes loose coupling, allowing the client to work with interfaces rather than concrete classes. It also provides flexibility, enabling subclasses to alter the type of objects created based on specific needs.

**When to Use:**

- **When a class cannot anticipate the type of objects it needs to create.**
  - **Scenario:** A game engine where different types of enemies are created. Each enemy type may have different attributes, but the game engine can use a factory method to create them without needing to know the specific class.
- **When subclasses may need to create different types of objects.**

  - **Scenario:** A GUI framework that supports various button styles. The framework can have a base button factory that subclasses implement to create different button types (e.g., rounded buttons vs. square buttons).

- **To promote loose coupling between client classes and the classes they instantiate.**
  - **Scenario:** In a logging framework where the logger's implementation can be switched (e.g., console, file, remote server) without changing the client code.

### 2. Abstract Factory

The **Abstract Factory** pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes. This pattern is particularly beneficial in scenarios where a system needs to be independent of how its products are created, composed, or represented. It ensures consistency among products by encapsulating the creation logic, allowing systems to be easily extended with new families of products without modifying existing code.

**When to Use:**

- **When your system needs to create multiple families of related objects.**

  - **Scenario:** A UI toolkit that supports themes (e.g., light and dark themes). Each theme may have its own set of buttons, dialogs, and text fields, all created by the respective theme factory.

- **When the client should not know about the concrete classes of the products it uses.**

  - **Scenario:** An e-commerce application that uses different payment gateways (e.g., PayPal, Stripe). The application interacts with a payment factory without knowing which concrete class is being used.

- **To ensure that products in a family are used together and are compatible.**
  - **Scenario:** In a car manufacturing system, where each car model requires a specific set of tires, engines, and interiors that need to be compatible with each other.

### 3. Builder

The **Builder** pattern focuses on constructing complex objects step by step. It separates the construction of a product from its representation, enabling the same construction process to create different representations of an object. This pattern is useful when an object requires multiple configurations or when the construction process involves intricate steps that should be managed independently from the final object.

**When to Use:**

- **When an object needs to be created with many possible configurations.**

  - **Scenario:** A meal ordering system where customers can choose various components (e.g., type of bread, fillings, sauces) to customize their sandwiches.

- **When the construction process involves several steps that can vary.**

  - **Scenario:** In a vacation package builder that allows users to select flights, hotels, and activities step by step, eventually constructing a complete package.

- **To avoid the telescoping constructor anti-pattern, where constructors become unwieldy.**
  - **Scenario:** A complex document creation system where various sections (headers, footers, body text) can be added in different combinations, making the creation process more manageable.

### 4. Prototype

The **Prototype** pattern facilitates the creation of new objects by copying an existing object, known as a prototype. This pattern is advantageous when the cost of creating a new instance of an object is higher than the cost of copying an existing one. By using prototyping, systems can instantiate new objects dynamically at runtime, enabling efficient resource utilization and promoting the reuse of existing objects.

**When to Use:**

- **When the cost of creating a new instance of an object is more expensive than copying an existing one.**

  - **Scenario:** In a graphic design application, where creating a new shape may involve significant resources. Instead, users can copy existing shapes and modify them as needed.

- **When you want to avoid the complexities of class hierarchies for object creation.**

  - **Scenario:** A software that generates reports where each report can be a prototype that users can customize.

- **When objects have many similar configurations or states.**
  - **Scenario:** A game where different player characters share common attributes but can have unique abilities. Cloning a prototype character allows for quick creation of similar characters.

### 5. Singleton

The **Singleton** pattern ensures that a class has only one instance and provides a global point of access to it. This is useful in scenarios where a single instance is required to coordinate actions across the system. The pattern restricts instantiation of a class to a single object, which can help in managing shared resources and preventing issues related to multiple instances.

**When to Use:**

- **When you need exactly one instance of a class to control actions across the system.**

  - **Scenario:** A configuration manager that loads settings from a file. It should be accessed globally to ensure consistency across the application.

- **When global access to an instance is required.**

  - **Scenario:** In a logging system where all parts of an application should log messages through a single instance of a logger.

- **To manage shared resources such as database connections or configuration settings.**
  - **Scenario:** A connection pool manager that maintains a single instance of the connection pool for efficient database access.

## Structural Patterns

### 1. Adapter

The **Adapter** pattern allows two incompatible interfaces to work together. It acts as a bridge between the client and the service, enabling the client to interact with the service's interface without modifying its code. This pattern is especially useful when you want to integrate new functionalities into an existing system without changing its structure.

**When to Use:**

- **When you want to use an existing class but its interface does not match the one you need.**

  - **Scenario:** Integrating a third-party payment service that has a different interface than what your application expects.

- **To enable compatibility between classes that cannot be modified.**

  - **Scenario:** Adapting a legacy system's API to work with a new application framework without changing the legacy code.

- **When integrating third-party libraries into your application.**
  - **Scenario:** Using a library for email notifications that has a different method signature than what your application expects.

### 2. Bridge

The **Bridge** pattern separates the abstraction from its implementation. By creating two separate hierarchies, one for the abstraction and one for the implementation, you can change them independently. This pattern promotes flexibility and allows you to evolve both the abstraction and implementation without affecting each other, thus adhering to the Open/Closed Principle.

**When to Use:**

- **When both the abstraction and the implementation should be able to vary independently.**

  - **Scenario:** A graphics rendering system where you can change the shapes and rendering methods independently (e.g., 2D vs. 3D rendering).

- **When you want to avoid a permanent binding between an abstraction and its implementation.**

  - **Scenario:** In a media player application, where you can switch between different formats (e.g., MP3, WAV) and different playback methods (e.g., local vs. streaming).

- **To minimize the impact of changes on existing code.**
  - **Scenario:** An application that allows users to choose different payment methods without affecting the overall checkout process.

### 3. Composite

The **Composite** pattern composes objects into tree structures to represent part-whole hierarchies. This pattern enables clients to treat individual objects and compositions of objects uniformly. It simplifies the client code by allowing it to work with a single interface, regardless of whether it is dealing with a single object or a group of objects.

**When to Use:**

- **When you need to represent part-whole hierarchies of objects.**

  - **Scenario:** A file system where files and directories can be treated uniformly. A directory can contain files or other directories.

- **To allow clients to treat individual objects and composites uniformly.**

  - **Scenario:** A graphic design tool where shapes and groups of shapes can be manipulated in the same way.

- **When dealing with a tree structure where operations apply to both leaves and composites.**
  - **Scenario:** In a menu system where individual menu items and submenus can be treated the same way, allowing for easy rendering and event handling.

### 4. Decorator

The **Decorator** pattern allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class. This pattern provides a flexible alternative to subclassing for extending functionality, enabling you to stack decorators to enhance the object's capabilities.

**When to Use:**

- **When you want to add responsibilities to individual objects without affecting others.**

  - **Scenario:** A notification system where you can decorate notifications with additional features, like priority levels or formatting.

- **When extending functionality through subclassing is impractical due to an explosion of subclasses.**

  - **Scenario:** In a text processing application where you can add features like encryption or compression to documents without creating separate classes for each combination.

- **To adhere to the Single Responsibility Principle.**
  - **Scenario:** A pizza ordering application where toppings can be added to pizzas dynamically without creating a different pizza class for each combination.

### 5. Façade

The **Façade** pattern provides a simplified interface to a complex subsystem. It acts as a wrapper, hiding the complexities of the subsystem and exposing only the necessary parts. This pattern is helpful in reducing dependencies on the subsystem and promoting decoupling between the client and the system.

**When to Use:**

- **When you want to provide a simple interface to a complex subsystem.**

  - **Scenario:** In a home theater system, where various components (TV, speakers, DVD player) can be controlled through a single remote interface.

- **When you want to decouple the client from the complex subsystem.**

  - **Scenario:** In a banking application, where clients can interact with the banking API through a simplified interface that hides the underlying complexities.

- **When you want to provide a layer of abstraction over a set of classes.**
  - **Scenario:** A library for working with images where a façade provides simplified methods for loading, saving, and processing images without exposing all the underlying classes.

### 6. Flyweight

The **Flyweight** pattern reduces memory usage by sharing common parts of state between multiple objects instead of storing them in each individual instance. This pattern is particularly effective when a large number of similar objects are needed, minimizing memory consumption and improving performance.

**When to Use:**

- **When a large number of objects are created that share common data.**

  - **Scenario:** In a text rendering application where multiple characters can share the same font style and size.

- **When memory consumption is a critical concern.**

  - **Scenario:** A game where many similar objects (e.g., trees, rocks) can share common properties (e.g., texture, size) while keeping unique properties in individual instances.

- **When you need to efficiently manage a large number of similar objects.**
  - **Scenario:** In a simulation system that models different types of vehicles, where common attributes (e.g., color, make) can be shared among instances.

### 7. Proxy

The **Proxy** pattern provides a surrogate or placeholder for another object to control access to it. It allows you to introduce additional functionality (like lazy loading, logging, access control) without modifying the original object's code. This pattern can be applied in various scenarios to manage and optimize resource access.

**When to Use:**

- **When you need to control access to an object.**

  - **Scenario:** A network resource where a proxy handles the communication between the client and the remote server, managing requests and responses.

- **To introduce additional behavior when accessing an object.**

  - **Scenario:** In an image rendering application where a proxy can load images lazily, only fetching them when they are needed for display.

- **When an object is expensive to create, and you want to delay its instantiation.**
  - **Scenario:** A configuration object that only loads settings when they are required, improving startup time.

## Behavioral Patterns

### 1. Chain of Responsibility

The **Chain of Responsibility** pattern allows a request to be passed along a chain of handlers until it is handled. This pattern decouples the sender of a request from its receiver, enabling multiple handlers to process the request without requiring explicit connections between them. It also enhances flexibility in adding or modifying handlers.

**When to Use:**

- **When you want to decouple the sender of a request from its receivers.**

  - **Scenario:** A support ticket system where tickets can be escalated through different levels of support until resolved.

- **When multiple objects can handle a request, and the handler is determined at runtime.**

  - **Scenario:** In a middleware system where various middleware components process requests in a web application.

- **To avoid coupling between the sender and receiver of a request.**
  - **Scenario:** A logging framework where different loggers can handle messages at various levels (e.g., debug, info, error) without the client needing to know which logger is being used.

### 2. Command

The **Command** pattern encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations. This pattern promotes decoupling between the object that invokes the operation and the object that knows how to perform it. Commands can be stored, logged, or undone, enhancing flexibility in handling requests.

**When to Use:**

- **When you want to parameterize objects with operations.**

  - **Scenario:** In a text editor, where user actions (e.g., cut, copy, paste) can be encapsulated as command objects, allowing for undo/redo functionality.

- **When you want to queue requests or log them.**

  - **Scenario:** In a task scheduling system where commands representing tasks can be queued for execution.

- **When you want to support undoable operations.**
  - **Scenario:** A drawing application that allows users to draw shapes, where each shape creation can be encapsulated as a command that can be undone.

### 3. Interpreter

The **Interpreter** pattern defines a representation for a language's grammar along with an interpreter that uses the representation to interpret sentences in the language. This pattern is beneficial in scenarios where a language needs to be interpreted, and the grammar can be represented as a hierarchical structure.

**When to Use:**

- **When you need to design a language or an expression grammar.**

  - **Scenario:** A simple scripting language used in a game for triggering actions based on player commands.

- **When you want to interpret sentences in a defined language.**

  - **Scenario:** A rule-based system where business rules can be defined and interpreted to drive application logic.

- **When the grammar for a language is relatively simple.**
  - **Scenario:** In a configuration system where simple expressions can be parsed and interpreted for setting values.

### 4. Iterator

The **Iterator** pattern provides a way to access elements of a collection without exposing its underlying representation. It encapsulates the iteration logic, allowing clients to traverse the collection without needing to know the details of how the collection is structured.

**When to Use:**

- **When you want to provide a uniform way to iterate over different types of collections.**

  - **Scenario:** A collection framework that provides various types of iterators for lists, sets, and maps, allowing consistent traversal.

- **When you want to hide the complexity of the collection's implementation.**

  - **Scenario:** In a library that exposes an interface for iterating over collections without revealing the internal data structure.

- **To allow multiple traversals of an aggregate object without exposing its internal structure.**
  - **Scenario:** In a game where different game entities (e.g., players, enemies) can be iterated over for updating their states during each game loop.

### 5. Mediator

The **Mediator** pattern defines an object that encapsulates how a set of objects interact. By promoting loose coupling, this pattern prevents direct interactions between the objects and reduces the dependencies in the system. The mediator acts as a central hub for communication, allowing changes to one object to be managed without impacting others.

**When to Use:**

- **When you want to reduce coupling between classes that communicate with each other.**

  - **Scenario:** A chat application where the chat room serves as a mediator between users, managing their interactions without them needing to know about each other directly.

- **When a change in one part of the system requires changes to many other parts.**

  - **Scenario:** In a flight reservation system where the booking status needs to update various components (e.g., payment, notification) through a mediator.

- **When you want to centralize complex communication between multiple objects.**
  - **Scenario:** In a dashboard application where multiple widgets can interact, with a mediator managing the communication and state changes.

### 6. Memento

The **Memento** pattern captures and externalizes an object's internal state without violating encapsulation, allowing the object to be restored to this state later. This pattern is useful in scenarios where an object's state needs to be saved and restored, enabling features like undo/redo functionality.

**When to Use:**

- **When you need to save the state of an object and restore it later.**

  - **Scenario:** A text editor that allows users to undo changes by saving snapshots of the document's state.

- **When you want to implement undo/redo functionality.**

  - **Scenario:** A drawing application where users can save the state of the canvas to revert back to previous states.

- **When you want to keep the object's implementation details private.**
  - **Scenario:** A game where player progress can be saved and restored without exposing the internal state of the player object.

### 7. Observer

The **Observer** pattern defines a one-to-many dependency between objects, allowing one object (the subject) to notify multiple observers of state changes. This pattern promotes loose coupling, as the subject does not need to know the details of its observers. It is widely used in event-driven systems where changes in one component need to trigger actions in other components.

**When to Use:**

- **When you want to notify multiple objects about state changes.**

  - **Scenario:** A stock market application where multiple users receive updates when stock prices change.

- **When a change in one object requires changing others, but you don’t want to tightly couple them.**

  - **Scenario:** In a weather monitoring system where weather stations notify display units about changes in weather conditions.

- **When implementing event-driven systems.**
  - **Scenario:** A UI framework where UI components (like buttons, sliders) notify observers (like controllers) about user interactions.

### 8. State

The **State** pattern allows an object to alter its behavior when its internal state changes. This pattern enables an object to change its class at runtime, providing a way to manage state-dependent behavior without using complex conditional statements.

**When to Use:**

- **When an object should change its behavior based on its state.**

  - **Scenario:** A media player application that changes its behavior (play, pause, stop) based on its current state (playing, paused, stopped).

- **When you want to avoid excessive conditional statements in your code.**

  - **Scenario:** In a vending machine where the behavior varies depending on the state (waiting for selection, dispensing item, out of stock).

- **When the object needs to represent different behaviors depending on its current state.**
  - **Scenario:** A character in a game that has different abilities based on whether it is in combat, idle, or dead state.

### 9. Strategy

The **Strategy** pattern enables the selection of an algorithm's behavior at runtime by encapsulating algorithms in separate classes and making them interchangeable. This pattern promotes flexibility and the ability to extend functionality without modifying existing code.

**When to Use:**

- **When you want to define a family of algorithms and make them interchangeable.**

  - **Scenario:** In a sorting application where different sorting strategies (e.g., quicksort, mergesort) can be selected at runtime.

- **When you want to encapsulate algorithms and use them interchangeably.**

  - **Scenario:** In a payment processing system where various payment methods (credit card, PayPal, cryptocurrency) can be implemented as separate strategies.

- **When you want to avoid using conditional statements for selecting algorithms.**
  - **Scenario:** In a compression utility where different compression strategies can be applied based on user selection.

### 10. Template Method

The **Template Method** pattern defines the skeleton of an algorithm in a method, allowing subclasses to redefine certain steps without changing the overall algorithm structure. This pattern promotes code reuse and the ability to vary parts of an algorithm without modifying the entire implementation.

**When to Use:**

- **When you want to define a common algorithm structure with varying implementations.**

  - **Scenario:** In a data processing application where different data sources (CSV, XML, JSON) can be processed using the same framework but with different parsing logic.

- **When you want to promote code reuse by defining shared steps in a base class.**

  - **Scenario:** In a game where different character types (warrior, mage) share common behaviors (move, attack) but have unique implementations.

- **When you want to enforce a specific algorithm structure while allowing customization.**

  - **Scenario:** In a report generation system where the report generation steps are fixed, but the specific data retrieved can vary based on the report type.

### 11. Visitor

The **Visitor** pattern allows adding new operations to existing object structures without modifying those structures. This pattern is useful for performing operations across a set of objects with varying types, promoting separation of concerns and enhancing code maintainability.

**When to Use:**

- **When you have a structure of objects with different types, and you want to perform operations on them.**

  - **Scenario:** In a graphics application, where different shapes (circles, squares) need to be rendered, printed, or saved in different formats.

- **When you want to add operations to a class hierarchy without modifying the classes.**

  - **Scenario:** In a document processing system, where you can add operations like spell checking, formatting, and exporting without changing the document structure.

- **When operations on an object structure need to be separated from the object structure itself.**
  - **Scenario:** In a shopping cart application, where the shopping cart has items of different types, and you want to calculate total prices, apply discounts, or print receipts based on item types.

### Conclusion

Design patterns are powerful tools for building robust, maintainable, and scalable applications. Understanding when and how to apply these patterns in real-life scenarios can significantly enhance software design, promote best practices, and enable teams to work more effectively. By leveraging these patterns, developers can create systems that are easier to understand, modify, and extend over time.
