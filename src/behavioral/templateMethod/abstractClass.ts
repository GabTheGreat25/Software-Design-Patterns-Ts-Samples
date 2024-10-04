export abstract class AbstractClass {
  // Template method that defines the steps of the algorithm
  public templateMethod(): void {
    this.stepOne(); // Step 1
    this.stepTwo(); // Step 2
    this.hook(); // Optional step
  }

  // Abstract methods to be implemented by subclasses
  protected abstract stepOne(): void;
  protected abstract stepTwo(): void;

  // Hook method that can be overridden by subclasses
  protected hook(): void {
    console.log("Hook: Default implementation."); // Default hook implementation
  }
}
