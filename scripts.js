let calculatorData = {
	displayVal: 0,
	operands = [],
	operations: [],
}

let operationTranslator = {
	+: 'add',
	-: 'subtract',
	x: 'multiply',
	/: 'divide',
}

function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (a) {
	const sum = a.reduce((total, index) => {
		return total + index;
	}, 0);
	return sum;
}

// Multiply with array, can take 3+ operands
// function multiply (a) {
// 	const ans = a.reduce((total, index) => {
// 		return total * index;
// 	}, 1);
// 	return ans;
// }

function multiply(a, b) {
	return a * b;
}

function divide (a, b) {
	return a / b;
}

function power(a, b) {
	return a ** b;
}

function factorial(a) {
	let ans = 1;
	while(a >= 1) {
		ans *= a;
		a--;
	}
	return ans;
}

function operate(operator, a, b) {
	calculatorData.displayVal = operator(a, b);
	updateDisplayValue();
}

function clearDisplay() {
	calculatorData.displayVal = 0;
	calculatorData.operands = [];

	updateDisplayValue();
}

function updateDisplayValue() {
	document.querySelector("#display").textContent = calculatorData.displayVal;
}

// Attach EventListeners to number buttons
let numberButtons = Array.from(document.querySelectorAll(".number"));
numberButtons.forEach(function(button) {
	button.addEventListener("click", (function() {
		if (calculatorData.displayVal == 0) {
			calculatorData.displayVal = button.textContent;
			console.log(calculatorData.displayVal);
		} else {
			calculatorData.displayVal = calculatorData.displayVal.toString() +
					button.textContent;
			console.log(calculatorData.displayVal);
		}
		updateDisplayValue();
	}));
});

// Attach EventListeners to the operator buttons
let operationButtons = Array.from(document.querySelectorAll(".operation"));
operationButtons.forEach(function(button) {
	button.addEventListener("click", (function() {
		calculatorData.operands.push(calculatorData.displayVal);
		calculatorData.operations.push(operationTranslator[button.textContent]);

		updateDisplayValue();
	}));
});

