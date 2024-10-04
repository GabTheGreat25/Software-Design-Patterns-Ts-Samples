import chainOfResponsibilityPattern from "./chainOfResponsibility/index";
import commandPattern from "./command/index";
import interpreterPattern from "./interpreter/index";
import iteratorPattern from "./iterator/index";
import mediatorPattern from "./mediator/index";
import mementoPattern from "./memento/index";
import observerPattern from "./observer/index";
import statePattern from "./state/index";
import strategyPattern from "./strategy/index";
import templateMethodPattern from "./templateMethod/index";
import visitorPattern from "./visitor/index";

const behavioralPatterns = [
  {
    name: "Chain of Responsibility Pattern",
    func: chainOfResponsibilityPattern,
  },
  { name: "Command Pattern", func: commandPattern },
  { name: "Interpreter Pattern", func: interpreterPattern },
  { name: "Iterator Pattern", func: iteratorPattern },
  { name: "Mediator Pattern", func: mediatorPattern },
  { name: "Memento Pattern", func: mementoPattern },
  { name: "Observer Pattern", func: observerPattern },
  { name: "State Pattern", func: statePattern },
  { name: "Strategy Pattern", func: strategyPattern },
  { name: "Template Method Pattern", func: templateMethodPattern },
  { name: "Visitor Pattern", func: visitorPattern },
];

export default async function runAllBehavioralPatterns() {
  await Promise.all(
    behavioralPatterns.map(({ name, func }) => {
      console.log(`\nRunning ${name}:`);
      return func();
    })
  );
}
