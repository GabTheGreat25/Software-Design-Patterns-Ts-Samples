export class Singleton {
  private static instance: Singleton;
  private data: Record<string, any> = {};

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public getData(): Record<string, any> {
    return this.data;
  }

  public setData(key: string, value: any): void {
    this.data[key] = value;
  }
}
