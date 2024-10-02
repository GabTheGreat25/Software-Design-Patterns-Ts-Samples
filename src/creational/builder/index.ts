import { HouseBuilder } from "./houseBuilder";

export default function builderPattern() {
  // Create and build a house
  const builder = new HouseBuilder();
  const house = builder.addRooms(3).addWindows(5).addGarden().build();

  console.log(house); // Output: House { rooms: 3, windows: 5, garden: true }
}
