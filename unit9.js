// Practice SET

let numbers = [7,1,8,5,2,4,6,8,7,4];

let setNumbers = new Set(numbers);

setNumbers.add(1);
setNumbers.add(4);
setNumbers.add(3);
setNumbers.add(5);
setNumbers.add(1);

console.log('Size: ' + setNumbers.size);
console.log(setNumbers);

setNumbers.delete(5);
console.log(setNumbers);

setNumbers.forEach((value, key, originalSet) => {
	console.log(value, key, originalSet, Object.is(setNumbers, originalSet));
});

console.log('it has the element 5: ' + (setNumbers.has(5)?'Yes':'No'));

setNumbers.clear(1);
console.log(setNumbers);

console.log('**********************************************************************');

// Turn SET into an array: Deleting repeated elements
let setNames = new Set(['apple','pear','banana', 'onion', 'pear']);

let arrayFruits = [...setNames];

arrayFruits.forEach(fruit => console.log(fruit));


let processAsync = new Promise((resolve, reject) => {
	setTimeout(() => resolve("Hellow World!"), 5000);
});

processAsync.then(resolve => console.log(resolve));

console.log('Successfully');