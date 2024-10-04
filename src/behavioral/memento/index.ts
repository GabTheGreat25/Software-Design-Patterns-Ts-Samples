import { Memento } from "./memento";
import { Caretaker } from "./careTaker";

export default function mementoPattern() {
  const caretaker = new Caretaker(); // Create a caretaker
  caretaker.addMemento(new Memento("State1")); // Save a state
  console.log(caretaker.getMemento(0).getState()); // Retrieve and print the saved state
}
