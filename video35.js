// Video 35: Acceso al prototipo con la referencia "SUPER"

let persona = {
	greeting(){
		return "Hola";
	},
	walking(){
		return `I'm walking on the street`;
	}
};

let amigo = {
	greeting(){
		// return Object.getPrototypeOf(this).greeting(this) + ", usuario";
		// 2. POdemos usar todas las funciones del padre desde su clase hija con SUPER
		return super.walking() + ", usuario";
	}
}

// New mode to apply inherit
Object.setPrototypeOf(amigo, persona);

console.log(amigo.greeting());
console.log(amigo.walking());



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