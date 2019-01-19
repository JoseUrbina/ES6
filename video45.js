// *** Video 45: Coercion de los simbolos ***

let num1 = 20;
let num2 = "10";
let bool = true;
let notNumber = NaN;

let name = Symbol.for('Joseph');

// We can do operations with the different type of data
console.log(num1 + num2);
console.log(bool + (!bool));
console.log(num1 * bool);
console.log(num1 + notNumber);

// SHow us up the value like symbol
console.log('The symbol is: ' , name);
// show us up the values like string
console.log('The symbol is: ' + String(name));