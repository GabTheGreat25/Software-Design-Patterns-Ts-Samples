export class Memento {
  private state: string; // The state to be saved

  constructor(state: string) {
    this.state = state; // Set the state
  }

  // Get the saved state
  getState(): string {
    return this.state;
  }
}
