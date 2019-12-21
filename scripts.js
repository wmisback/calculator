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

function multiply (a) {
	const ans = a.reduce((total, index) => {
		return total * index;
	}, 1);
	return ans;
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