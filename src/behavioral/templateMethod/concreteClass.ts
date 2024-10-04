import { AbstractClass } from "./abstractClass";

export class ConcreteClass extends AbstractClass {
  protected stepOne(): void {
    console.log("Step One implemented."); // Implementation of step one
  }

  protected stepTwo(): void {
    console.log("Step Two implemented."); // Implementation of step two
  }

  protected hook(): void {
    console.log("Hook: Overridden implementation."); // Overridden hook implementation
  }
}
