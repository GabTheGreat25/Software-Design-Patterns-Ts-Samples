import { Observer } from "./observer";

export class ConcreteObserver implements Observer {
  // Update the observer with the new state
  update(state: string): void {
    console.log(`State changed to: ${state}`);
  }
}
