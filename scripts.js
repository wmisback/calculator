let calculatorData = {
	displayVal: "0",
	decimalDisable: false,
}

const operationTranslator = {
	'+': 'add',
	'-': 'subtract',
	'x': 'multiply',
	'/': 'divide',
}

const orderOfOps = ['x', '/', '+', '-'];

function add (a, b) {
	return parseInt(a) + parseInt(b);
}

function subtract (a, b) {
	return parseInt(a) - parseInt(b);
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
	let operation = operationTranslator[operator];
	let ans = 0;
	switch(operation) {
		case "multiply":
		ans = multiply(a, b);
		break;
		case "divide":
		ans = divide(a, b);
		break;
		case "add":
		ans = add(a, b);
		break;
		case "subtract":
		ans = subtract(a, b);
		break;
	}
	return ans;
}

function clearDisplay() {
	calculatorData.displayVal = 0;

	updateDisplayValue();
}

function updateDisplayValue() {
	document.querySelector("#display").textContent = calculatorData.displayVal;
}

function findSolution() {
	let opsAndOps = calculatorData.displayVal.split(' ');
	//While still operands to operate on
	while (opsAndOps.length > 1) {
		//For each operation find the answer and replace 2 operands and operator
		orderOfOps.forEach(function(operator) {
			for (let i=0;i<opsAndOps.length;i++) {
				if (opsAndOps[i] == operator) {
					//console.log(opsAndOps.join(' '));
					//console.log(`${opsAndOps[i-1]} ${opsAndOps[i]} ${opsAndOps[i+1]} =`)
					let ans = operate(operator, opsAndOps[i-1], opsAndOps[i+1]);
					//console.log(ans);
					opsAndOps.splice(i-1, 3, ans);
				}
			}
		});
	}

	calculatorData.displayVal = opsAndOps[0];
	updateDisplayValue();
}

// Attach EventListeners to number buttons
let numberButtons = Array.from(document.querySelectorAll(".number"));
numberButtons.forEach(function(button) {
	button.addEventListener("click", (function() {
		if (button.textContent == '.' && calculatorData.decimalDisable) {

		} else {
			if (calculatorData.displayVal == '0' || calculatorData.displayVal.toString() == "NaN") {
				if (button.textContent == '.') {
					console.log('yup');
					calculatorData.displayVal = '0' + button.textContent;
					calculatorData.decimalDisable = true;
				} else {
					calculatorData.displayVal = button.textContent;
				}
			} else {
				if (button.textContent == '.') {
					console.log('yup');
					calculatorData.displayVal = 
							calculatorData.displayVal.toString() +
							'0' +
							button.textContent;
					calculatorData.decimalDisable = true;
				} else {
					calculatorData.displayVal = calculatorData.displayVal.toString() +
						button.textContent;
				}
			}
		}
		
		updateDisplayValue();
	}));
});

// Attach EventListeners to the operator buttons
let operationButtons = Array.from(document.querySelectorAll(".operation"));
operationButtons.forEach(function(button) {
	button.addEventListener("click", (function() {
		calculatorData.decimalDisable = false;
		if (calculatorData.displayVal == 0 || calculatorData.displayVal.toString() == "NaN") {
			if (button.textContent == '-') {
				calculatorData.displayVal = button.textContent;
			} else {
				calculatorData.displayVal = calculatorData.displayVal;
			}
		} else {
			calculatorData.displayVal = `${calculatorData.displayVal.toString()} ${button.textContent} `;
		}

		updateDisplayValue();
	}));
});

//Attach EventListener to equals button
let equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", (function() {
	if (calculatorData.displayVal == 0) {
		calculatorData.displayVal = button.textContent;
	} else {
		findSolution();
	}

	updateDisplayValue();
}));

