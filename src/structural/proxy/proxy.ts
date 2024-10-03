import { RealSubject } from "./realSubject";

export class Proxy {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  // Proxy adds additional logic before or after calling RealSubject.
  public request(): string {
    return `Proxy: Call to ${this.realSubject.request()}`;
  }
}
