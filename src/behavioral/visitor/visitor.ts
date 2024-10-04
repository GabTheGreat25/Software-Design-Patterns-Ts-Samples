import { ConcreteVisitableA } from "./concreteVisitableA";
import { ConcreteVisitableB } from "./concreteVisitableB";

export interface Visitor {
  visitConcreteVisitableA(element: ConcreteVisitableA): void; // Visit method for ConcreteVisitableA
  visitConcreteVisitableB(element: ConcreteVisitableB): void; // Visit method for ConcreteVisitableB
}
