let num1 = document.getElementById('num1')! as HTMLInputElement;
let num2 = document.getElementById('num2')! as HTMLInputElement;
let addButton = document.getElementById('addButton');

const add = (a: number, b: number) => a + b;

const handleAddButtonClick = () => {
    const firstValue = +num1.value;
    const secondValue = +num2.value;
    const result = add(firstValue, secondValue);
    console.log(`Sum of ${firstValue} and ${secondValue} is ${result}`);
};

addButton?.addEventListener('click', handleAddButtonClick);
