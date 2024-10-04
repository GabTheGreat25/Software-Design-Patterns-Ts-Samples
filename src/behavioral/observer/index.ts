import { Subject } from "./subject";
import { ConcreteObserver } from "./concreteObserver";

export default function observerPattern() {
  const subject = new Subject(); // Create a subject
  const observer = new ConcreteObserver(); // Create an observer

  subject.attach(observer); // Attach the observer to the subject
  subject.setState("New State"); // Change the state and notify observers
}
