import { Command } from "./command";
import { Receiver } from "./receiver";

export class ConcreteCommand implements Command {
  private receiver: Receiver; // Receiver associated with the command

  constructor(receiver: Receiver) {
    this.receiver = receiver; // Set the receiver
  }

  // Execute the command by invoking the receiver's action
  execute(): void {
    this.receiver.action();
  }
}
