let displayVal = 0;

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
	displayVal = 0;
	updateDisplayValue();
}

function updateDisplayValue() {
	document.querySelector("#display").textContent = displayVal;
}

function enterNum(e) {
	if (displayVal == 0) {
		displayVal = e.target.textContent;
	} else {
		displayVal = displayVal.toString() + e.target.textContent;
	}
	updateDisplayValue();
}

// Attach eventlisteners to numbers
let numberButtons = Array.from(document.querySelectorAll(".number"));
numberButtons.forEach(function(button) {
	button.addEventListener("click", (function() {
		if (displayVal == 0) {
			displayVal = button.textContent;
		} else {
			displayVal = displayVal.toString() + button.textContent;
		}
		updateDisplayValue();
	}));
});