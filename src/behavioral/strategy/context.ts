import { Strategy } from "./strategy";

export class Context {
  private strategy: Strategy; // The strategy to use

  constructor(strategy: Strategy) {
    this.strategy = strategy; // Set the strategy
  }

  // Execute the operation using the current strategy
  executeStrategy(a: number, b: number): number {
    return this.strategy.doOperation(a, b);
  }
}
