class Flyweight {
  private sharedState: string;

  constructor(sharedState: string) {
    this.sharedState = sharedState;
  }

  // Combines shared and unique state to perform an operation.
  public operation(uniqueState: string): string {
    return `Flyweight: Displaying shared (${this.sharedState}) and unique (${uniqueState}) state.`;
  }
}

export class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

  // Returns an existing flyweight or creates a new one if it doesn't exist.
  public getFlyweight(sharedState: string): Flyweight {
    if (!(sharedState in this.flyweights)) {
      this.flyweights[sharedState] = new Flyweight(sharedState);
    }
    return this.flyweights[sharedState];
  }
}
