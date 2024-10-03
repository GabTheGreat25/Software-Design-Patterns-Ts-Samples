import { Facade } from "./facade";

export default function facadePattern() {
  const facade = new Facade();
  console.log(facade.operation()); // Output: Subsystem A: Ready! and Subsystem B: Go!
}
