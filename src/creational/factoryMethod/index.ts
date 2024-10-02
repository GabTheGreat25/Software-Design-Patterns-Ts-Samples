import { AnimalFactory } from "./animalFactory";

export default function factoryMethod() {
  // Instantiate the factory
  const factory = new AnimalFactory();

  // Create animals
  const dog = factory.createAnimal("Dog");
  const cat = factory.createAnimal("Cat");

  // Use the objects
  dog.speak(); // Output: Dog makes a sound
  cat.speak(); // Output: Cat makes a sound
}
