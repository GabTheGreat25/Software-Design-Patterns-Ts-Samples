import { Component } from "./component";

// Composite represents complex components that have children.
export class Composite extends Component {
  private children: Component[] = []; // Define the children property

  // Adds a child component to the composite.
  add(component: Component): void {
    this.children.push(component);
  }

  // Calls the operation of each child component.
  operation(): string {
    const results: string[] = this.children.map((child) => child.operation());
    return `Branch(${results.join(", ")})`;
  }
}
