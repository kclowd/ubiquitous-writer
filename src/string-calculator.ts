// Basic string calculator functions
// Take a string of numbers separated by commas 
// Return the sum of all numbers

/* 
    From spec:
    - Passing an empty string should result in zero.
    - Passing a single number should result in the number itself.
    - Numbers greater than 1000 should be ignored—e.g., “1,2,1001” should result in 3, but “1,2,1000” should result in 1003.
    - Passing negative numbers should result in an exception thrown, with the negatives passed listed in the exception message.
*/ 
export function add(numbers: string): number {
    let integers = numbers.split(',').map(x => parseInt(x));
    let negativeIntegers = integers.filter(x => x < 0);

    if (negativeIntegers.length > 0) {
        const errString = 'Negative numbers are not allowed: ' + negativeIntegers.join(', ');
        throw new RangeError(errString);
    }

    return integers
        .filter(x => x <= 1000)
        .reduce((a,b) => a + b, 0)
}