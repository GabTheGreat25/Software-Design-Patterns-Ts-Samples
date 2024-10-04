import { Strategy } from "./strategy";

export class ConcreteStrategyAdd implements Strategy {
  doOperation(a: number, b: number): number {
    return a + b; // Perform addition
  }
}
