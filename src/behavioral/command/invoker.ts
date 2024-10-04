import { Command } from "./command";

export class Invoker {
  private onStart: Command; // The command to execute

  constructor(command: Command) {
    this.onStart = command; // Set the command
  }

  // Method to invoke the command
  invoke(): void {
    this.onStart.execute(); // Execute the command
  }
}
