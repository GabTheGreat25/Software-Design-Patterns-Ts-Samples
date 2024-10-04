import { Memento } from "./memento";

export class Caretaker {
  private mementos: Memento[] = []; // Array to store mementos

  // Add a memento to the caretaker
  addMemento(memento: Memento): void {
    this.mementos.push(memento);
  }

  // Get a memento by index
  getMemento(index: number): Memento {
    return this.mementos[index];
  }
}
