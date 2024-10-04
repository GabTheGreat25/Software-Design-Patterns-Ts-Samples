import { Expression } from "./interpreter";

export class TerminalExpression implements Expression {
  private data: string; // Data to be matched

  constructor(data: string) {
    this.data = data; // Set the data
  }

  // Check if the context includes the data
  interpret(context: string): boolean {
    return context.includes(this.data); // Return true if the context contains the data
  }
}
