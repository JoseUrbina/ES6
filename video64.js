// 64: Metodos estaticos y metodos computados

let screamName = "screamName";
let lowerName = "lowerName";

class Person 
{
	constructor(name)
	{
		this.name = name;
	}

	sayName()
	{
		console.log(`My name is ${this.name}`);
	}

	// Metodo computado
	[screamName]()
	{
		return this.name.toUpperCase();
	}

	[lowerName]()
	{
		return this.name.toLowerCase();
	}

	// Metodo estatico
	static createInstance(name)
	{
		return new Person(name);
	}
}

let yo = Person.createInstance("José");

console.log(yo);

console.log(yo.screamName());
console.log(yo.lowerName());

// we cannot do this 

/* console.log(yo.createInstance("Perez")); */

