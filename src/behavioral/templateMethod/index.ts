import { ConcreteClass } from "./concreteClass";

export default function templateMethodPattern() {
  const concrete = new ConcreteClass(); // Create a concrete class
  concrete.templateMethod(); // Execute the template method
}
