import { Iterator } from "./iterator";

export class ConcreteIterator<T> implements Iterator<T> {
  private items: T[]; // Items to iterate over
  private index: number = 0; // Current index

  constructor(items: T[]) {
    this.items = items; // Set the items
  }

  // Get the next item
  next(): T {
    return this.items[this.index++];
  }

  // Check if there are more items
  hasNext(): boolean {
    return this.index < this.items.length;
  }
}
