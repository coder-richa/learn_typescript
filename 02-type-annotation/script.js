/**
 *
 * @param num accepts a numeric value
 * @returns square of num of type number
 */
var square = function (num) { return num * num; };
/**
 *
 * @param firstName accepts a string value for first name
 * @param lastName  accepts a string value for last name
 * @param age  accepts a numeric value for age
 * @param isCanadianResident  accepts a boolean value for presenting Canadian Residency
 * @returns a string describing person with the provided information
 */
var describeAperson = function (firstName, lastName, age, isCanadianResident) {
    return "".concat(firstName).concat(lastName ? ' ' + lastName : '', "  is of age ").concat(age, " and ").concat(isCanadianResident ? 'has' : 'does not have', " Canadian Residency");
};
/**
 *
 * @param num1 accepts a numeric value
 * @param num2 accepts a numeric value
 * @param resultDescription accepts a string for the result description
 * @param printMessage accepts a boolean value to flag whether to print the result string or return it
 * @returns a string value when printMessage is set to false, otherwise void
 */
var addTwoNumbers = function (num1, num2, resultDescription, printMessage) {
    var result = num1 + num2;
    var outputMessage = "".concat(resultDescription, " ").concat(result);
    if (printMessage)
        console.log(outputMessage);
    return outputMessage;
};
console.log("Square of 10 is ".concat(square(10)));
console.log(describeAperson('John', 'Biden', 45, false));
addTwoNumbers(10, 5, 'Result is', true);
