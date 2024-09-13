import TestRunner from '../TestRunner.js';

const runner = new TestRunner();

function test(name, testFunction) {
    runner.registerTest(name, testFunction);
}

function describe(suiteName, suiteFunction) {
    console.log(`Suite: ${suiteName}`);
    suiteFunction();
}

export default { test, describe, runner };