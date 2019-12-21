let calculatorData = {
	displayVal: 0,
	operandA: 0,
	operandB: 0,
	oeperation: "",
}

let operationTranslator = {
	+: 'add',
	-: 'subtract',
	x: 'multiply',
	/: 'divide',
}

let displayVal = 0;
let operandA = 0;
let operandB = 0;

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
	operator(a, b);
}

function clearDisplay() {
	calculatorData.displayVal = 0;
	calculatorData.operandA = 0;
	calculatorData.operandB = 0;

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
		calculatorData.operandA = calculatorData.displayVal;
		calculatorData.operation = operationTranslator[button.textContent];

		updateDisplayValue();
	}));
});

