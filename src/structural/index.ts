import adapterPattern from "../structural/adapter/index";
import bridgePattern from "../structural/bridge/index";
import compositePattern from "../structural/composite/index";
import decoratorPattern from "../structural/decorator/index";
import facadePattern from "../structural/facade/index";
import flyweightPattern from "../structural/flyweight/index";
import proxyPattern from "../structural/proxy/index";

const structuralPatterns = [
  { name: "Adapter Pattern", func: adapterPattern },
  { name: "Bridge Pattern", func: bridgePattern },
  { name: "Composite Pattern", func: compositePattern },
  { name: "Decorator Pattern", func: decoratorPattern },
  { name: "Facade Pattern", func: facadePattern },
  { name: "Flyweight Pattern", func: flyweightPattern },
  { name: "Proxy Pattern", func: proxyPattern },
];

export default async function runAllStructuralPatterns() {
  await Promise.all(
    structuralPatterns.map(({ name, func }) => {
      console.log(`\nRunning ${name}:`);
      return func();
    })
  );
}
