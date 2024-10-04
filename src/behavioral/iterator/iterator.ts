export interface Iterator<T> {
  next(): T; // Get the next item
  hasNext(): boolean; // Check if there are more items
}
