// *** Video 50: forEach() : Sets ***

let people = new Set(["Joseph", "Margareth", "Pepe", "Frank"]);

// .forEach() : recorre c/u de los elementos del Set Object
// value && key are the same, because this function is the same for MAP
// then, Creators didn't wanto to bother to create another function 
people.forEach(function(value, key, originalSet){
	console.log(value, key, originalSet);

	console.log(Object.is(people, originalSet));
});

// Example 2

console.log("*********************************************************");

let fruits = new Set(["apple", "pear", "cuccumber", "carrot", "mango", "strawberry"]);

console.log(`Size: ${fruits.size}`);

fruits.forEach((value, key, originalSet) => {
	console.log(value, key, originalSet, Object.is(fruits, originalSet));
});