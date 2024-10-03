import { Implementation } from "./implementation";

// The abstraction defines high-level operations and delegates the implementation.
export class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  // The abstraction's operation is built on the implementation.
  public operation(): string {
    return `Abstraction: Base operation with: ${this.implementation.operationImplementation()}`;
  }
}
