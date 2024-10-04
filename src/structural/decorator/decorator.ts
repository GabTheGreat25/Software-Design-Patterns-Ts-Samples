import { BaseComponent } from "./baseComponent";

export class Decorator extends BaseComponent {
  protected component: BaseComponent;

  constructor(component: BaseComponent) {
    super();
    this.component = component ;
  }

  // Adds additional functionality to the operation.
  public operation(): string {
    return `Decorator(${this.component.operation()})`;
  }
}
