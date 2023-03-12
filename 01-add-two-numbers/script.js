var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var addButton = document.getElementById('addButton');
var add = function (a, b) { return a + b; };
var handleAddButtonClick = function () {
    var firstValue = +num1.value;
    var secondValue = +num2.value;
    var result = add(firstValue, secondValue);
    console.log("Sum of ".concat(firstValue, " and ").concat(secondValue, " is ").concat(result));
};
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener('click', handleAddButtonClick);
