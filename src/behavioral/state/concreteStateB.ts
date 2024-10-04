import { State } from "./state";
import { Context } from "./context";
import { ConcreteStateA } from "./concreteStateA";

export class ConcreteStateB implements State {
  handle(context: Context): void {
    console.log("ConcreteStateB: Handling request.");
    context.setState(new ConcreteStateA()); // Change state to ConcreteStateA
  }
}
