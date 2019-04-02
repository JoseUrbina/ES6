// ** Video 40: Valores por defecto en la destructuracion **

// Arrays

let [fruit1, fruit2 = "pear"] = ["apple"];
console.log(fruit1, fruit2);

// Objects

let settings = {
	name: "Leviatan",
	correo: "levi.99@gmail.krat"
};

let {name, correo : email = "jose09@hotmail.com"} = settings;
console.log(name, email);

function sum(x)
{
	let total = y => x + y;

	return total; 
}

let sumar = sum(3);

console.dir(sumar(6));