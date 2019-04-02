// Video 13 y 14: parametros por defecto

// when the first parameter is optional, we need to do another funciton for invoking
// the original function
function saludar1(time)
{
	saludar("Pedrox", time);
}

/* function saludar(user = 'José Antonio', time = 1000)
{
	setTimeout(() => console.log(user), time);
} */

function saludar(valor ,user = 'José Antonio', time = 3000)
{
	console.log(arguments);
	// setTimeout(() => console.log(user), time);
}

saludar("Easy-going", "Anthony");
//saludar("Anthony", 3000);
// saludar1(5000);


function execute(message, fn)
{
	if(typeof(fn) === "undefined")
	{
		console.error("fn is not a function");
		return;
	}

	fnMessage(message);
}

function fnMessage(message)
{
	console.log(message);
}

execute("Welcome to the Jungle", fnMessage);

console.log(typeof(fnMessage) === "function");


function agregar_alumno(arr_alumnos, ...alumnos)
{

	// Using REST parameter ES6
	alumnos.forEach(alumno => {
		arr_alumnos.push(alumno);
	});

	return arr_alumnos;
}

let arr_alumnos = ["José"];
let result = agregar_alumno(arr_alumnos, "Anthony", "María", "Laura", "Pedrox");

console.log(result);

// ******* Error por las restricciones del parametro REST *******

/* function pruebaREST(...Numbers, ...Pueblo)
{

} */

let arrayStrings;

function pushStrings(arr_string, ...parameters)
{
	// Filtrando valores que son tipo string
	arr_string = parameters.filter(p => typeof(p) === "string");

	return arr_string;
}

arrayStrings = pushStrings([], "Hello", 23, "Computer", 23.4, true, undefined, "Mice");
console.log(arrayStrings); 

console.log(Math.sqrt(4));

// *** Video 17: EL operador spread

var numeros = [10, 50, 41, 1, 95, 455];

let numMax = Math.max(...numeros);

console.log(numMax);

function numbers(name = 'Anthony', ...num)
{
	console.log(num);
}

numbers('José',...numeros);


let persona = {
	name: 'Jose',
	message: function(messages){
		let name = 'Pedrox';

		var fn = function(name){
			return `${messages} - ${name}`;
		}.bind(this)

		return fn(name);
	}
}

console.log(persona.message('Hello world'));

console.info("*****************************************");

// **** Video 18: ROmper la relacion de referencia de los objetos
// 
var student = {
	name: 'Pedrox',
	age: 23
};

// It's a bad form to copy an object to a new variable
// its values is passed by reference
var student0 = student;

let student1 = { ...student };

student1.name = 'Luisa';
student1.age = 65;

console.log([student, student1]);

// Video 19: Añadir propiedades a los objetos a partir de otros objetos

function showProperties(){

	let persona1 = {
		name: 'Luis',
		age: 24
	};

	let persona2 = {
		name: 'María',
		age:13,
		married: true,
		address: 'Villa el Sol',
		phone: '87451245'
	};

	persona1 = {
		...persona2,
		...persona1
	};

	return [persona1, persona2];
}

console.log(showProperties());

console.info('***************************************');

let frutas = ['apple', 'pear'];
let canast = ['banana', ...frutas ,'grapes', 'watermelon'];
console.log(canast.join('-'));

// REST
function showFruits(user, ...fruits){
	console.log(`${user} has eaten ${fruits}`);
}

// SPREAD
function materialBuildings(product, price, amount){
	console.log(`${product} : ${price} : ${amount}`);
}

showFruits('Mary', 'apple', 'pear', 'melon');
materialBuildings(...['Wood', 150.50, 2]);

// Using spread for getting the values of group of hidden input
let idProducts = [...document.querySelectorAll('.idProducts')];
console.log(idProducts.map(e => e.value));

// Video 21: Aclarando el doble comportamiento de las funciones ***

console.info("*******************************************");

function personas(name)
{
	// THis is a way ES5 lower
	// if(this instanceof personas)
	
	// new.target : If object is declared with new, this will contain new else it's undefined
	if(typeof new.target !== "undefined")
	{
		this.name = name;
	}
	else{
		throw new Error('It is not a persona object');
	}
}

var per1 = new personas('José');
console.log(per1);


function furniture(product)
{
	if(typeof new.target !== "undefined")
	{
		this.product = product;
	}
	else{
		throw new Error("It is not an object");
	}
}

var f1 = new furniture("Pen");
console.log(f1);

//var f2 = furniture('table');
//console.log(f2);

// .. Video 23: Ejemplos de funciones de flecha

console.info('**************************************************');

let myFunction1 = function(value){
	return value;
};

let myFunction2 = value => value;

console.log([myFunction1('José'), myFunction2('Pedrox')]);

let suma1 = function(num1, num2){
	return num1 + num2;
}

let suma2 = (num1, num2) => num1 + num2;

console.log([suma1(1,2), suma2(8,9)]);

let greeting1 = function(){
	return 'Hello World!';
}

let greeting2 = () => 'Hello World!';
console.log([greeting1(), greeting2()]);

let saludarPersona1 =  function(name){
	let sentence = `Hello, ${name}`;

	return sentence;
};

let saludarPersona2 = name => {
	let sentence = `Hello, ${name}`;
	return sentence;
};

console.log([saludarPersona1('Peter'), saludarPersona2('Ola')]);

// Special case :  return a literal object

let newPersona1 = function(id, name){
	return {id, name};
}

let newPersona2 = (id, name) => ({id, name});

console.log(newPersona1(1, 'Lora'), newPersona2(90,' Grace'));

// Video 24: ANonymus functions

console.info('******************************************');

let test1 = (function(name){
	return `Hello, ${name}`;
})("Melissa");

let test2 = (name => `Hello, ${name}`)("Karlox");

console.log([test1, test2]);