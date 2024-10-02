import { Dog } from "./dog";
import { Cat } from "./cat";

export class AnimalFactory {
  createAnimal(type: string): Dog | Cat | null {
    switch (type) {
      case "Dog":
        return new Dog();
      case "Cat":
        return new Cat();
      default:
        return null;
    }
  }
}
