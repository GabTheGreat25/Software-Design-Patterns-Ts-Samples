import { TerminalExpression } from "./terminalExpression";
import { OrExpression } from "./nonTerminalExpression";

export default function interpreterPattern() {
  const expr1 = new TerminalExpression("Hello"); // Create terminal expression for "Hello"
  const expr2 = new TerminalExpression("World"); // Create terminal expression for "World"
  const orExpression = new OrExpression(expr1, expr2); // Combine expressions with OR logic

  // Test the combined expression with different contexts
  console.log(orExpression.interpret("Hello there!")); // Should print true
  console.log(orExpression.interpret("Goodbye World!")); // Should print true
  console.log(orExpression.interpret("Nothing here!")); // Should print false
}
