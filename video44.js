// *** Video 44: COmpartiendo simbolos: Symbol.for() y Symbol.keyFor() ***

// for: if it exists the variable to use it, or not exist , it will create it and then use it
// this create a pile of Symbols
let firstName = Symbol.for('first name');

let objeto = {};
objeto[firstName] = "Rapha123";

console.log(objeto[firstName]);

// which symbol is
console.log(firstName);

// With this, we can make a reference to the original symbol
// it's useful when we want to use a symbol in differents files
let newFirstName = Symbol.for('first name');

console.log(firstName == newFirstName);
console.log(firstName === newFirstName);
console.log(Object.is(firstName, newFirstName));

console.log(objeto[Symbol.keyFor(firstName)]);

/*
	Symbol.keyFor(symbol) => we can get the alias or id of X symbol
*/

console.log(Symbol.keyFor(firstName));
console.log(Symbol.keyFor(newFirstName));

// Symbol.keyFor(symbol) => just work when you previously used Symbol.for()
// does not work in new Symbols like this
let name = Symbol('name');

console.log(Symbol.keyFor(name));
