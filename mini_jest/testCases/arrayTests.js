import { assertContains, assertNotEqual } from '../assertions.js';
import { test, describe } from './index.js';

describe('Array tests', () => {
    test('should contain item', () => {
        const array = [1, 2, 3];
        assertContains(array, 2, 'Array does not contain 2');
    });

    test('should not contain item', () => {
        const array = [1, 2, 3];
        assertNotEqual(array.includes(4), true, 'Array contains 4');
    });
});