import { ConcreteStrategyAdd } from "./concreteStrategyA";
import { ConcreteStrategySubtract } from "./concreteStrategyB";
import { Context } from "./context";

export default function strategyPattern() {
  const contextAdd = new Context(new ConcreteStrategyAdd()); // Add context
  console.log(contextAdd.executeStrategy(3, 4)); // Output: 7

  const contextSubtract = new Context(new ConcreteStrategySubtract()); // Subtract context
  console.log(contextSubtract.executeStrategy(5, 2)); // Output: 3
}
