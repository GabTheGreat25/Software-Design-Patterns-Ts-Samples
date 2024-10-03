import { Abstraction } from "./abstraction";
import {
  ConcreteImplementationA,
  ConcreteImplementationB,
} from "./implementation";

export default function bridgePattern() {
  const implementationA = new ConcreteImplementationA();
  const abstractionA = new Abstraction(implementationA);

  // Uses Implementation A
  console.log(abstractionA.operation()); // Output: Abstraction: Base operation with: Implementation A

  const implementationB = new ConcreteImplementationB();
  const abstractionB = new Abstraction(implementationB);

  // Uses Implementation B
  console.log(abstractionB.operation()); // Output: Abstraction: Base operation with: Implementation B
}
