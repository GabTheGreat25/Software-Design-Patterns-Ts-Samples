import { ConcreteMediator } from "./concreteMediator";

export default function mediatorPattern() {
  const mediator = new ConcreteMediator(); // Create a mediator
  mediator.notify("Colleague1", "Event1"); // Notify about an event
}
