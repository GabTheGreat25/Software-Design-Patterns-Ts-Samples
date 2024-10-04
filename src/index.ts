import runAllCreationalPatterns from "./creational";
import runAllStructuralPatterns from "./structural";
import runAllBehavioralPatterns from "./behavioral";

const green = "\x1b[32m";
const reset = "\x1b[0m";

type DesignPatternKey = "creational" | "structural" | "behavioral";

const designPatterns: Record<
  DesignPatternKey,
  { name: string; func: () => Promise<void> }
> = {
  creational: { name: "Creational Patterns", func: runAllCreationalPatterns },
  structural: { name: "Structural Patterns", func: runAllStructuralPatterns },
  behavioral: { name: "Behavioral Patterns", func: runAllBehavioralPatterns },
};

const arg = process.argv[2] as DesignPatternKey | undefined;

async function runSelectedPatterns() {
  if (arg && designPatterns[arg]) {
    console.log(`\n${green}Running ${designPatterns[arg].name}${reset}`);
    return await designPatterns[arg].func();
  } else {
    console.log(`\nRunning All Patterns`);
    for (const key in designPatterns) {
      const patternKey = key as DesignPatternKey;
      console.log(
        `\n${green}Running ${designPatterns[patternKey].name}${reset}`
      );
      await designPatterns[patternKey].func();
    }
  }
}

runSelectedPatterns();
