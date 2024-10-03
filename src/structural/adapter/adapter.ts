import { OldService } from "./oldService";

export class Adapter {
  private oldService: OldService;

  constructor() {
    this.oldService = new OldService();
  }

  // The new method adapts the old method to be compatible with the new interface.
  newMethod(): string {
    return this.oldService.oldMethod();
  }
}
