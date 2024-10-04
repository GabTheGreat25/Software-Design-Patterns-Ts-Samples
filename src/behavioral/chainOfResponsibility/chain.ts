export interface Handler {
  setNext(handler: Handler): Handler; // Set the next handler in the chain
  handle(request: string): string | null; // Handle the request
}
