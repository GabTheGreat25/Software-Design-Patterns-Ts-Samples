import abstractFactory from "../creational/abstractFactory/index";
import builderPattern from "../creational/builder/index";
import factoryMethod from "../creational/factoryMethod/index";
import prototypePattern from "../creational/prototype/index";
import singletonPattern from "../creational/singleton/index";

const creationalPatterns = [
  { name: "Factory Method Pattern", func: factoryMethod },
  { name: "Abstract Factory Pattern", func: abstractFactory },
  { name: "Builder Pattern", func: builderPattern },
  { name: "Prototype Pattern", func: prototypePattern },
  { name: "Singleton Pattern", func: singletonPattern },
];

export default async function runAllCreationalPatterns() {
  await Promise.all(
    creationalPatterns.map(({ name, func }) => {
      console.log(`\nRunning ${name}:`);
      return func();
    })
  );
}
