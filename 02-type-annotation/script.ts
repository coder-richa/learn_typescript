/**
 *
 * @param num accepts a numeric value
 * @returns square of num of type number
 */
const square = (num: number): number => num * num;

/**
 *
 * @param firstName accepts a string value for first name
 * @param lastName  accepts a string value for last name
 * @param age  accepts a numeric value for age
 * @param isCanadianResident  accepts a boolean value for presenting Canadian Residency
 * @returns a string describing person with the provided information
 */
const describeAperson = (firstName: string, lastName: string, age: number, isCanadianResident: boolean): string =>
    `${firstName}${lastName ? ' ' + lastName : ''}  is of age ${age} and ${isCanadianResident ? 'has' : 'does not have'} Canadian Residency`;

/**
 *
 * @param num1 accepts a numeric value
 * @param num2 accepts a numeric value
 * @param resultDescription accepts a string for the result description
 * @param printMessage accepts a boolean value to flag whether to print the result string or return it
 * @returns a string value when printMessage is set to false, otherwise void
 */
const addTwoNumbers = (num1: number, num2: number, resultDescription: string, printMessage: boolean): string | void => {
    const result = num1 + num2;
    const outputMessage = `${resultDescription} ${result}`;
    if (printMessage) console.log(outputMessage);
    return outputMessage;
};

console.log(`Square of 10 is ${square(10)}`);
console.log(describeAperson('John', 'Biden', 45, false));
addTwoNumbers(10, 5, 'Result is', true);
