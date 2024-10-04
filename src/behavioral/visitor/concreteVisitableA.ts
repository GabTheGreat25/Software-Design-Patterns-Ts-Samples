import { Visitable } from "./visitable";
import { Visitor } from "./visitor";

export class ConcreteVisitableA implements Visitable {
  accept(visitor: Visitor): void {
    visitor.visitConcreteVisitableA(this); // Accepts the visitor
  }
}
