import { AnimalFactory } from "./animalFactory";

export default function abstractFactory() {
  // Instantiate the factory
  const factory = new AnimalFactory();

  // Create animals
  const dog = factory.createAnimal("Dog");
  const cat = factory.createAnimal("Cat");

  console.log(dog?.speak()); // Output: Woof!
  console.log(cat?.speak()); // Output: Meow!
}
