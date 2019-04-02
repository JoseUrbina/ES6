// *** Video 43: Simbolos y propiedades ***

/*
	1. We cannot use new symbol() -> it does not have a constructor
	2. symbol('alias') => we can use an alias
*/

let primerNombre = Symbol('primer nombre');
let segundoNombre = Symbol('segundo nombre');

let user = {
	[segundoNombre] : "Antonio"
}; 

user[primerNombre] = "Joseph";

// We can use the properties by symbol by this way => just object[NameSymbol]
console.log(user.primerNombre);
console.log(user[primerNombre]);

/*
	IMPORTANT: ALL SIMBOLS ARE DIFFERENTS
*/

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');

console.log(simbolo1 == simbolo2);
console.log(simbolo1 === simbolo2);
console.log(Object.is(simbolo1, simbolo2));

console.dir(primerNombre);

/* We can get the value of a symbol and using directly into a string*/
// console.log(primerNombre.toString());
