// Video 62: Clases como expresiones

let Persona = class {
	constructor(name, message){
		this.name = name;
		this.message = message;
	}

	showMessage()
	{
		console.info(this.message);
	}

	showName(){
		console.log(`My name is ${this.name}`);
	}
};

let jose = new Persona("Joseph", "This is a new world");

jose.showName();
jose.showMessage();
console.log(typeof jose);
console.log("jose variable is an instance of Persona: " + (jose instanceof Persona));
console.log("jose is an instance of Object: " + (jose instanceof Object));