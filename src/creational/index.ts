import abstractFactory from "src/creational/abstractFactory/index";
import builderPattern from "src/creational/builder/index";
import factoryMethod from "src/creational/factoryMethod/index";
import prototypePattern from "src/creational/prototype/index";
import singletonPattern from "src/creational/singleton/index";

const patterns = [
  { name: "Factory Method Pattern", func: factoryMethod },
  { name: "Abstract Factory Pattern", func: abstractFactory },
  { name: "Builder Pattern", func: builderPattern },
  { name: "Prototype Pattern", func: prototypePattern },
  { name: "Singleton Pattern", func: singletonPattern },
];

export default async function runAllCreationalPatterns() {
  await Promise.all(
    patterns.map(({ name, func }) => {
      console.log(`\nRunning ${name}:`);
      return func();
    })
  );
}
