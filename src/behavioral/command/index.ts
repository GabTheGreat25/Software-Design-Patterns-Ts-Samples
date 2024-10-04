import { ConcreteCommand } from "./concreteCommand";
import { Receiver } from "./receiver";
import { Invoker } from "./invoker";

export default function commandPattern() {
  const receiver = new Receiver(); // Create a receiver
  const command = new ConcreteCommand(receiver); // Create a command
  const invoker = new Invoker(command); // Create an invoker

  invoker.invoke(); // Invoke the command
}
