import { Context } from "./context";
import { ConcreteStateA } from "./concreteStateA";

export default function statePattern() {
  const context = new Context(new ConcreteStateA()); // Create context with initial state
  context.request(); // Handle request in State A
  context.request(); // Handle request in State B
}
