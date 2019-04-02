// *** Video 51: Convertir un set en array ***

let numbers = [1, 4, 5, 6, 7, 2, 5, 5, 2, 5 ];

let setNumeros = new Set(numbers);

// Using spread operator for building an array from a set
console.log([...setNumeros]);


// Function that deletes repeated elements in an array
function deletedRepeated(items)
{
	return [... new Set(items)];
}

let arrayPeople = deletedRepeated(["Joseph", "María", "Pedrox", "Joseph"]);
console.log(arrayPeople);

// Always delete all elements
setNumeros.clear(1);
console.log(setNumeros.size);

// We can send a string to SET, because a string is an Array in JS
let letters = new Set("HelloWorld!");
console.log(letters.size);
console.log(letters);