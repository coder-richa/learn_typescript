// TS inference infer the type of the following variables as number
var num1 = 10;
var num2 = 20;
// TS inference infer the type of the following variables as string
var firstName = 'John';
var lastName = 'Brown';
// TS inference infer the type of the following variable as number
var age = 10;
// TS inference infer the type of the following variable as boolean
var isCanadianCitizen = false;
// TS inference infer the type of the following variable as string[]
var colors = ['red', 'blue', 'green'];
console.log("Sum of ".concat(num1, " and ").concat(num2, " is ").concat(num1 + num2));
console.log("Age of ".concat(isCanadianCitizen ? '' : 'non ', "Canadian citizen, ").concat(firstName, " ").concat(lastName, " is ").concat(age, " "));
// TS inference infer the type of color as string
colors.forEach(function (color) {
    console.log(color);
});
