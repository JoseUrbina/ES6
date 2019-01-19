// *** Video 46: Recuperando las propiedades del simbolo ***

let active = Symbol.for("active");
let email = Symbol.for("email");

let user = {
	["code"]: "XT125",
	name: "Joseph",
	lastname: "Pinocho",
	[email]: "Pinochito93@gmail.com",
	age: 25,
	[active]: true
};

// Getting all properties of the object that aren't symbols
console.log(Object.keys(user));

// foreach all properties of the object that aren't symbols
for(let property in user)
{
	console.log(property, user[property]);
}

// Getting all properties of the object that are symbols
let simbolos = Object.getOwnPropertySymbols(user);

console.log(simbolos);

// Getting the id an name symbols of the each symbol from the object
for(let i in simbolos){
	console.log(simbolos[i], Symbol.keyFor(simbolos[i]));
}