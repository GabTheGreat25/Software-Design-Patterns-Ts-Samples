import { Observer } from "./observer";

// Subject class that maintains a list of observers
export class Subject {
  private observers: Observer[] = []; // List of observers
  private state: string | undefined; // State to notify observers about

  // Attach an observer
  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  // Detach an observer
  detach(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Notify all observers of the state change
  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.state || ""); // Notify the observer
    }
  }

  // Set a new state and notify observers
  setState(state: string): void {
    this.state = state;
    this.notify(); // Notify observers of the new state
  }
}
