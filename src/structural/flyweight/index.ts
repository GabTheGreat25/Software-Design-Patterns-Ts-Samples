import { FlyweightFactory } from "./flyweightFactory";

// Main function to demonstrate the flyweight pattern.
export default function flyweightPattern() {
  const factory = new FlyweightFactory();

  const flyweight1 = factory.getFlyweight("SharedState1");
  console.log(flyweight1.operation("UniqueState1")); // Flyweight: Displaying shared (SharedState1) and unique (UniqueState1) state.

  const flyweight2 = factory.getFlyweight("SharedState1");
  console.log(flyweight2.operation("UniqueState2")); // Flyweight: Displaying shared (SharedState1) and unique (UniqueState2) state.
}
