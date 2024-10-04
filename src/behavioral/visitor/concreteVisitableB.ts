import { Visitable } from "./visitable";
import { Visitor } from "./visitor";

export class ConcreteVisitableB implements Visitable {
  accept(visitor: Visitor): void {
    visitor.visitConcreteVisitableB(this); // Accepts the visitor
  }
}
