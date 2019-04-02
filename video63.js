/* Video 62: Clases como expresiones */


// ** Example 1: Create a function that returns a instance class with parameters **

function createClass(definition, ...parameters)
{
	return new definition(...parameters);
}

let animal = createClass(class {
	constructor(name, age)
	{
		this.name = arguments[0];
		this.age = age;
	}

	showData()
	{
		console.log(`Name: ${this.name} - Age: ${this.age}`);
	}
}, "Ralf", 24);

console.log(typeof animal);
console.log("Object: " + (animal instanceof Object));


animal.showData();

// ** Example 2: Send an instance of a class to a function **

class Carro
{
	constructor(color, engine){
		this.color = color;
		this.engine = engine;
	}

	showEngine()
	{
		return "Engine: " + this.engine;
	}
}

function showDataCarro(car)
{
	// Validacion para saber si el parametro es una instancia de carro
	if(!(car instanceof Carro))
	{
		throw `It's not a car`;
		return;
	}

	console.info(car.showEngine());
}

console.log("***********************************************");

let wolfwagen = new Carro("Green", "2800");

showDataCarro(wolfwagen); 
showDataCarro("");



