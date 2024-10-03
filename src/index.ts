import runAllCreationalPatterns from "./creational";
import runAllStructuralPatterns from "./structural";

const green = "\x1b[32m";
const reset = "\x1b[0m";

const designPatterns = [
  { name: "Creational Patterns", func: runAllCreationalPatterns },
  { name: "Structural Patterns", func: runAllStructuralPatterns },
];

async function runAllPatterns() {
  await Promise.all(
    designPatterns.map(({ name, func }) => {
      console.log(`\n${green}Running ${name}${reset}`);
      return func();
    })
  );
}

runAllPatterns();
