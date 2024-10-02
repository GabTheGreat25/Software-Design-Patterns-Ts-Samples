export class Prototype {
  constructor(public name: string) {}

  clone(): Prototype {
    return new Prototype(this.name);
  }
}
