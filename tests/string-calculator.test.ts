import { add } from '../src/string-calculator';

const testStringEmpty = ''; // Should return 0
const testStringSingleNumber = '4'; // Should return 4
const testStringTwoNumbers = '2,5'; // Should return 7
const testStringManyNumbers = '3,6,9,12'; // Should return 30
const testStringThousand = '1,2,1000' // Should return 1003
const testStringOverThousand = '1,2,1001' // Should return 3
const testStringNegativeNumber = '-3,2' // Should throw an exception
const testStringMultipleNegatives = '2,5,-1,7,-4'
const testNegativeErrorString = 'Negative numbers are not allowed: -3';
const testMultipleNegativesErrorString = 'Negative numbers are not allowed: -1, -4';


describe('Testing calculator add function', () => {
    test('Empty string should return 0', () => {
        expect(add(testStringEmpty)).toBe(0);
    });
    test('Single number string should return number itself', () => {
        expect(add(testStringSingleNumber)).toBe(4);
    });
    test('Comma-separated numbers should be added together', () => {
        expect(add(testStringEmpty)).toBe(0);
        expect(add(testStringManyNumbers)).toBe(30);
    });
    test('Numbers over 1000 should be ignored', () => {
        expect(add(testStringOverThousand)).toBe(3);
        expect(add(testStringThousand)).toBe(1003);
    });
    test('Negative numbers in string should throw exception', () => {
        expect(() => add(testStringNegativeNumber)).toThrow(testNegativeErrorString);
        expect(() => add(testStringMultipleNegatives)).toThrow(testMultipleNegativesErrorString);
    });
});