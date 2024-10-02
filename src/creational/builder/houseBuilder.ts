import { House } from "./house";

export class HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  addRooms(rooms: number): this {
    this.house.rooms = rooms;
    return this; // Allows chaining
  }

  addWindows(windows: number): this {
    this.house.windows = windows;
    return this;
  }

  addGarden(): this {
    this.house.garden = true;
    return this;
  }

  build(): House {
    return this.house;
  }
}
