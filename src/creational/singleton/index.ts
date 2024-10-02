import { Singleton } from "./singleton";

export default function singletonPattern() {
  // Create or get Singleton instance
  const instance1 = Singleton.getInstance();
  instance1.setData("key1", "value1");

  // Get the singleton instance again
  const instance2 = Singleton.getInstance();

  console.log(instance2.getData()); // Output: { key1: 'value1' }
  console.log(instance1 === instance2); // Output: true
}
