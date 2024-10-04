import { Expression } from "./interpreter";

export class OrExpression implements Expression {
  private expr1: Expression; // First expression
  private expr2: Expression; // Second expression

  constructor(expr1: Expression, expr2: Expression) {
    this.expr1 = expr1; // Set the first expression
    this.expr2 = expr2; // Set the second expression
  }

  // Interpret the context for both expressions
  interpret(context: string): boolean {
    return this.expr1.interpret(context) || this.expr2.interpret(context); // Return true if either expression evaluates to true
  }
}
