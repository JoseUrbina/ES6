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

for(let i = 1 ; i <= 10; i++)
{
	arrayFunctions.push(
		() => {
			let init = i;
			return (increment) => increment + init; 
		}
	);
}

var inc1 = arrayFunctions[0]();

console.dir(inc1);


