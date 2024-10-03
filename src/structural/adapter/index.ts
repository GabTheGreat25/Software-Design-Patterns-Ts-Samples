import { Adapter } from "./adapter";

export default function adapterPattern() {
  const adapter = new Adapter();
  // Calls the new method, which internally uses the old method.

  console.log(adapter.newMethod()); // Output: Old method output
}
