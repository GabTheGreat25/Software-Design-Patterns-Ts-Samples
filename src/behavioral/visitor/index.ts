import { ConcreteVisitor } from "./concreteVisitor";
import { ConcreteVisitableA } from "./concreteVisitableA";
import { ConcreteVisitableB } from "./concreteVisitableB";

export default function VisitorPattern() {
  const visitor = new ConcreteVisitor(); // Create a visitor
  const visitableA = new ConcreteVisitableA(); // Create a ConcreteVisitableA
  const visitableB = new ConcreteVisitableB(); // Create a ConcreteVisitableB

  visitableA.accept(visitor); // Accept visitor on ConcreteVisitableA
  visitableB.accept(visitor); // Accept visitor on ConcreteVisitableB
}
