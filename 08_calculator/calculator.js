const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
	let fac = 1;
  if (num === 0) {return 1;}
  for (let i = 1; i <= num; i++) {
    fac *= i;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
