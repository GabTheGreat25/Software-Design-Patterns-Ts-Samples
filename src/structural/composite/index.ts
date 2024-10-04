import { Leaf } from "./leaf";
import { Composite } from "./composite";

export default function compositePattern() {
  const leaf1 = new Leaf(); // Creating two distinct leaf instances
  const leaf2 = new Leaf();
  const composite = new Composite();

  // Adds two leaf components to the composite.
  composite.add(leaf1);
  composite.add(leaf2);

  // Outputs the structure of the composite with two leaves.
  console.log(composite.operation()); // Output: Branch(Leaf, Leaf)
}
