import { Component } from "./component";

// Composite represents complex components that have children.
export class Composite extends Component {
  private children: Component[] = [];

  // Adds a child component to the composite.
  add(component: Component) {
    this.children.push(component);
  }

  // Calls the operation of each child component.
  operation(): string {
    const results: string[] = [];
    for (const child of this.children) {
      results.push(child.operation());
    }
    return `Branch(${results.join(", ")})`;
  }
}
