let field2 = "age";

let gato = {
	name: "Cat",
	[field2]: 24,
	message(){
		return "Miau!!";
	}
};

let perro = {
	name: "Dog",
	age: 12,
	ladrar(){
		return "Guauuu!";
	}
};

console.log([gato, perro]);

let Angora = Object.create(gato);

//Angora = Object.assign(Angora, perro);
//Object.setPrototypeOf(Angora, perro);

console.log(Object.getPrototypeOf(Angora) === gato);

