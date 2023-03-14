/**
 *
 * @param firstName accepts a string value for first name
 * @param lastName  accepts a string value for last name
 * @param age  accepts a numeric value for age
 * @param isCanadianResident  accepts a boolean value for presenting Canadian Residency
 * @returns a string describing person with the provided information
 */
let processInfo = (firstName: string, lastName: string = '', age: number = 40, isCanadianResident: boolean = false): string =>
    `${firstName}${lastName ? ' ' + lastName : ''} is of age ${age} and ${isCanadianResident ? 'has' : 'does not have'} Canadian Residency`;

console.log(processInfo('Raman'));
console.log(processInfo('Priya', 'Narang', 30));
