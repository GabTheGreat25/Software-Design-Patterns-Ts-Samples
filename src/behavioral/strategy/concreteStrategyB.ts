import { Strategy } from "./strategy";

export class ConcreteStrategySubtract implements Strategy {
  doOperation(a: number, b: number): number {
    return a - b; // Perform subtraction
  }
}
