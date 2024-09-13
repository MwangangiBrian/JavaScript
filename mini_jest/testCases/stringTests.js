import { assertEqual, assertNotEqual } from '../assertions.js';
import { test, describe } from './index.js';

describe('String tests', () => {
    test('should be equal', () => {
        const str = 'hello';
        assertEqual(str, 'hello', 'Strings are not equal');
    });

    test('should not be equal', () => {
        const str = 'hello';
        assertNotEqual(str, 'world', 'Strings are equal');
    });
});