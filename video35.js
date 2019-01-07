// Video 35: Acceso al prototipo con la referencia "SUPER"

let persona = {
	greeting(){
		return "Hola";
	},
	
};

let amigo = {
	greeting(){
		// return Object.getPrototypeOf(this).greeting(this) + ", usuario";
		return super.greeting() + ", usuario";
	}
}

// New mode to apply inherit
Object.setPrototypeOf(amigo, persona);

console.log(amigo.greeting());

// Variable super just works with object JSON Format, or ES6

/* 
function person(){
	this.name = "José";
}

person.prototype.greeting = function(){
	return "Hola";
}

function friend(name)
{
	this.name = name;
	person.prototype.constructor.call(this);
}

friend.prototype = new person();
friend.prototype.constructor = friend;

friend.prototype.greeting = function(){
	// return Object.getPrototypeOf(this).greeting(this) + ", usuario";
	return super.greeting() + ", usuario";
}

var fr = new friend("Pedrox");

console.log(fr); */