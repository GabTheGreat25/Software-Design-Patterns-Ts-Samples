export interface Expression {
  interpret(context: string): boolean; // Interpret the context
}
