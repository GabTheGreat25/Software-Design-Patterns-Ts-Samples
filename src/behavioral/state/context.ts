import { State } from "./state";

export class Context {
  private state: State; // Current state

  constructor(state: State) {
    this.state = state; // Set initial state
  }

  setState(state: State): void {
    this.state = state; // Change state
  }

  request(): void {
    this.state.handle(this); // Delegate request to the current state
  }
}
