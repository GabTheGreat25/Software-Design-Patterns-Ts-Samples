import { BaseComponent } from "./baseComponent";
import { Decorator } from "./decorator";

export default function decoratorPattern() {
  const simple = new BaseComponent();
  console.log(simple.operation()); // Output: BaseComponent

  // Wraps the simple component with a decorator.
  const decorated = new Decorator(simple);
  console.log(decorated.operation()); // Output: Decorator(BaseComponent)
}
