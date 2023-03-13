// TS inference infer the type of the following variables as number
let num1 = 10;
let num2 = 20;

// TS inference infer the type of the following variables as string
let firstName = 'John';
let lastName = 'Brown';

// TS inference infer the type of the following variable as number
let age = 10;

// TS inference infer the type of the following variable as boolean
let isCanadianCitizen = false;

// TS inference infer the type of the following variable as string[]
let colors = ['red', 'blue', 'green'];

console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
console.log(`Age of ${isCanadianCitizen ? '' : 'non '}Canadian citizen, ${firstName} ${lastName} is ${age} `);

// TS inference infer the type of color as string
colors.forEach((color) => {
    console.log(color);
});
