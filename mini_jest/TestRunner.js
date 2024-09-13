class TestRunner {
    constructor() {
        this.tests = [];
        this.executionOrder = 'sequential';
    }

    registerTest(name, testFunction) {
        this.tests.push({ name, testFunction });
    }

    runTests() {
        console.log('Running tests...');
        for (const test of this.tests) {
            try {
                test.testFunction();
                console.log(`PASS: ${test.name}`);
            } catch (error) {
                console.error(`FAIL: ${test.name} - ${error.message}`);
                console.error(error.stack);
            }
        }
    }

    filterTests(filter) {
        this.tests = this.tests.filter(test => test.name.includes(filter));
    }

    setExecutionOrder(order) {
        this.executionOrder = order;
        if (order === 'random') {
            this.tests.sort(() => Math.random() - 0.5);
        }
    }
}

export default TestRunner;