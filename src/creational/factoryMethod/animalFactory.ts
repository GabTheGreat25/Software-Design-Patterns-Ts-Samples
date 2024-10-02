import { Animal } from "./animal";

export class AnimalFactory {
  createAnimal(type: string): Animal {
    return new Animal(type);
  }
}
