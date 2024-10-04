import { ConcreteIterator } from "./concreteIterator";

export default function iteratorPattern() {
  const items = ["Item1", "Item2", "Item3"]; // Sample items
  const iterator = new ConcreteIterator(items); // Create an iterator

  // Iterate through the items
  while (iterator.hasNext()) {
    console.log(iterator.next()); // Print each item
  }
}
