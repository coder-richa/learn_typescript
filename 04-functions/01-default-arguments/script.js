/**
 *
 * @param firstName accepts a string value for first name
 * @param lastName  accepts a string value for last name
 * @param age  accepts a numeric value for age
 * @param isCanadianResident  accepts a boolean value for presenting Canadian Residency
 * @returns a string describing person with the provided information
 */
var processInfo = function (firstName, lastName, age, isCanadianResident) {
    if (lastName === void 0) {
        lastName = '';
    }
    if (age === void 0) {
        age = 40;
    }
    if (isCanadianResident === void 0) {
        isCanadianResident = false;
    }
    return ''
        .concat(firstName)
        .concat(lastName ? ' ' + lastName : '', ' is of age ')
        .concat(age, ' and ')
        .concat(isCanadianResident ? 'has' : 'does not have', ' Canadian Residency');
};
console.log(processInfo('Raman'));
console.log(processInfo('Priya', 'Narang', 30));
