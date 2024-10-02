import runAllCreationalPatterns from "src/creational";

async function runAllPatterns() {
  await Promise.all([runAllCreationalPatterns()]);
}

runAllPatterns();
