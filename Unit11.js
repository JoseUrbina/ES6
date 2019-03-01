// Practice Unit 11

class Animal 
{
	constructor(type, name){
		this.type = type;
		this.name = name;
	}

	getType()
	{
		console.log("Type of animal: " + this.type);
	}

	showMessageName(message = "")
	{
		console.log(message + ` , I'm ${this.name}`);
	}
}

// Error: => let goat = Animal("sf","sgds");

let cocodrile = new Animal("Reptile", "Cocodrile");

console.log(typeof Animal);
console.log(typeof cocodrile);
console.log("Coco is an instance of Animal" + (cocodrile instanceof Animal));
console.log('Coco is an instance of Object' + (cocodrile instanceof Object)); 

cocodrile.getType();
cocodrile.showMessageName("Hello World");

console.info("***************** Create class since a definition *****************");

function createClass(definitionClass)
{
	return new definitionClass();
}

let equipment = createClass(class {
	constructor()
	{
		this.title = undefined;
		this.price = 0;
	}

	showTitle()
	{
		console.log("Title: " + this.title);
	}
});

equipment.showTitle();

console.info("******************* Expression **********************");

let Persona = class {
	constructor(name, lastname)
	{
		this.name = name;
		this.lastname = lastname;
	}

	showCompletedName()
	{
		return `${this.name} ${this.lastname}`;
	}

	static message()
	{
		console.log("HELLO!");
	}
}

let maria = new Persona("María", "Duarte");
 console.log(maria.showCompletedName());

console.info("***************** class as argument *****************");

function showNamePersona(persona)
{
	if(!(persona instanceof Persona))
	{
		throw `It's not a Persona instance`;
		return;
	}

	console.log("Argument: " + persona.showCompletedName());
}

showNamePersona(maria);

Persona.message();