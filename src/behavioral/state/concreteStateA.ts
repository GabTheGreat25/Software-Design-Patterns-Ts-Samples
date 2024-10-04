import { State } from "./state";
import { Context } from "./context";
import { ConcreteStateB } from "./concreteStateB";

export class ConcreteStateA implements State {
  handle(context: Context): void {
    console.log("ConcreteStateA: Handling request.");
    context.setState(new ConcreteStateB()); // Change state to ConcreteStateB
  }
}
