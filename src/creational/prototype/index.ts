import { Prototype } from "./prototype";

export default function prototypePattern() {
  // Create an original object
  const original = new Prototype("Original Object");

  // Clone the original object
  const clone = original.clone();

  console.log(clone.name); // Output: Original Object
}
