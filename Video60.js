// Video 60: Declaracion basica de una clase en ES6

class Persona
{
	constructor(name){
		this.name = name;
	}

	sayMyName(){
		console.log(this.name);
	}

	scream(){
		console.log('Helloooo, My name is: ' + this.name);
	}
}

let jose = new Persona("Joseph Anthony");
jose.scream();
jose.sayMyName();

// Class Persona is a function
console.log(typeof Persona);

// return true: jose is an instance of Object and Persona
console.log(jose instanceof Persona);
console.log(jose instanceof Object);

console.log(Persona.prototype.sayMyName);