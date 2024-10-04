export interface Mediator {
  notify(sender: string, event: string): void; // Notify colleagues of events
}
