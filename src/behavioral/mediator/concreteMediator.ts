import { Mediator } from "./mediator";

export class ConcreteMediator implements Mediator {
  // Notify all colleagues of an event
  notify(sender: string, event: string): void {
    console.log(`${sender} triggered ${event}`);
  }
}
