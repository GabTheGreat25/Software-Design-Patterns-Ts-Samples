import { Visitor } from "./visitor";
import { ConcreteVisitableA } from "./concreteVisitableA";
import { ConcreteVisitableB } from "./concreteVisitableB";

export class ConcreteVisitor implements Visitor {
  visitConcreteVisitableA(element: ConcreteVisitableA): void {
    console.log("Visited ConcreteVisitableA");
  }

  visitConcreteVisitableB(element: ConcreteVisitableB): void {
    console.log("Visited ConcreteVisitableB");
  }
}
