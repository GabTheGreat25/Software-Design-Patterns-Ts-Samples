import { ConcreteHandler1 } from "./concreteHandler";
import { ConcreteHandler2 } from "./concreteHandler";

export default function chainOfResponsibilityPattern() {
  const handler1 = new ConcreteHandler1();
  const handler2 = new ConcreteHandler2();

  handler1.setNext(handler2); // Link the handlers

  console.log(handler1.handle("Handler1")); // Test the chain with a request
}
