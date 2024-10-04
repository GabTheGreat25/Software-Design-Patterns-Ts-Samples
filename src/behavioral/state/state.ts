import { Context } from "./context";

export interface State {
  handle(context: Context): void; // Method to handle context
}
