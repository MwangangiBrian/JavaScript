// assertions.js
export function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        throw new Error(message || `Expected ${expected}, but got ${actual}`);
    }
}

export function assertNotEqual(actual, expected, message) {
    if (actual === expected) {
        throw new Error(message || `Expected not ${expected}, but got ${actual}`);
    }
}

export function assertTrue(value, message) {
    if (!value) {
        throw new Error(message || `Expected true, but got ${value}`);
    }
}

export function assertFalse(value, message) {
    if (value) {
        throw new Error(message || `Expected false, but got ${value}`);
    }
}

export function assertContains(array, item, message) {
    if (!array.includes(item)) {
        throw new Error(message || `Expected array to contain ${item}`);
    }
}