// Example 1
/* var addTO = function(num1){
	var suma = function(num2)
	{
		return num1 + num2;
	}

	return suma;
}

var sum = addTO(2);
var result = sum(15);

console.dir(result);

// Example 2
var counter = function(init)
{
	// Inicializar la variable
	let variable = init;
	return function(increment){
		// Incrementar la variable en un determinado número
		return variable += increment;
	}
}

var operacion = counter(1);
console.dir(operacion(10));

// Example 3: You cannot change the const variable type of string number, just array and object
const contador = 1;

function changeValueContador(newValue)
{
	const contador = newValue;
	console.log(contador);
}

changeValueContador("I changed the const variable");
console.log(contador);

// Example 4: You can change the values into a const array or object
const newObject = {name: 'José', age: 25};
newObject.gender = 'Male';

console.dir(newObject); */

// Example 5: Store closures into an array

var arrayFunctions = [];

// New version which uses let variables

/* for(let i = 1 ; i <= 10; i++)
{
	arrayFunctions.push(
		() => {
			let init = i;
			return (increment) => increment + init; 
		}
	);
} */

// Old version with auto-executable functions,  because didn't exist let variables
for(var i = 1 ; i <= 10; i++)
{
	arrayFunctions.push(
		(function(valor){
			return function(increment){
				return increment + valor;
			}
		})(i)
	);
}

// Because the stored function into array is auto executable, 
// we don't need () at the end
var inc1 = arrayFunctions[0];

console.dir(inc1(10));

var vObject = (function(condition){
	let user = {
		name: 'levi09',
		password: '12345',
		role: 'Admin'
	};

	return condition ? user : {message: 'Don\'t smoke here'};
})(false);

console.dir(vObject);

// Return an object with the operation to do
var op = (function(){
	let operaciones = {
		num1: 9,
		num2: 5,
		suma: (num1, num2) => num1 + num2,
		resta: function(num1, num2){
			return this.num1 - num2
		}
	};

	return operaciones;
})();

console.log(op.resta(10, 4));

function persona(num1, num2)
{
	this.num1 = num1 || 0;
	this.num2 = num2 || 0;

	this.suma = function(num2)
	{
		//return this.num1 + num2;
		
		let sum = () => {return num1 + num2};
		return sum();		
	}
}

var persona = {
	name: 'José',
	age: 25,
	saludar: function(){
		console.log('Hello, my name is ' + this.name);

		let funcion = function(name){
			console.log(name);
		}.bind(this);

		funcion('Pedrox');
	}
};

persona.saludar();





