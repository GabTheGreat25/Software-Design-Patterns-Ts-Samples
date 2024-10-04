import { Handler } from "./chain";

export class ConcreteHandler1 implements Handler {
  private nextHandler: Handler | null = null;

  // Set the next handler in the chain
  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  // Handle the request; if not handled, pass to the next handler
  handle(request: string): string | null {
    if (request === "Handler1") {
      return `Handled by Handler 1`;
    }
    return this.nextHandler?.handle(request) ?? null; // Delegate to the next handler
  }
}

export class ConcreteHandler2 implements Handler {
  private nextHandler: Handler | null = null;

  // Set the next handler in the chain
  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  // Handle the request; if not handled, pass to the next handler
  handle(request: string): string | null {
    if (request === "Handler2") {
      return `Handled by Handler 2`;
    }
    return this.nextHandler?.handle(request) ?? null; // Delegate to the next handler
  }
}
