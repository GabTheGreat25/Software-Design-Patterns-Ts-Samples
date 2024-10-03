export interface Implementation {
  operationImplementation(): string;
}

// Concrete implementations provide their own logic.
export class ConcreteImplementationA implements Implementation {
  operationImplementation(): string {
    return "Implementation A";
  }
}

export class ConcreteImplementationB implements Implementation {
  operationImplementation(): string {
    return "Implementation B";
  }
}
