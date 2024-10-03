import { Leaf } from "./leaf";
import { Composite } from "./composite";

export default function compositePattern() {
  const leaf = new Leaf();
  const composite = new Composite();

  // Adds two leaf components to the composite.
  composite.add(leaf);
  composite.add(leaf);

  // Outputs the structure of the composite with two leaves.
  console.log(composite.operation()); // Output: Branch(Leaf, Leaf)
}
