export class Animal {
  constructor(public type: string) {}

  speak(): void {
    console.log(`${this.type} makes a sound`);
  }
}
