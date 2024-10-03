import { SubsystemA } from "./subsystemA";
import { SubsystemB } from "./subsystemB";

export class Facade {
  private subsystemA: SubsystemA;
  private subsystemB: SubsystemB;

  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
  }

  // Provides a simple method to call multiple subsystem operations.
  public operation(): string {
    return `${this.subsystemA.operationA()} and ${this.subsystemB.operationB()}`;
  }
}
