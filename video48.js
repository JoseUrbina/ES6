// *** Video 48: Creando Sets - Agregando items y buscando elementos ***

let conjunto = new Set();

// .Add() => WE CAN ADD A NEW ELEMENT TO SET OBJECT
conjunto.add(1);
conjunto.add(45);
conjunto.add(0);
conjunto.add(23);
conjunto.add(7);
conjunto.add(2);
// IF THE ELEMENT IS REPEATED, THIS IS IGNORED BY THE SET
// WHEN WE ADD A NEW ELEMENT, Object.is() IS EXECUTED BY SEARCHING THE ELEMENT IN THE SET OBJECT
conjunto.add(7);
console.log('7');

// .SIZE => WE CAN GET THE SET SIZE
let sizeSet = conjunto.size;

console.log(`Size Set: ${sizeSet}`);

console.log(conjunto);


// Convert a SET Object to an ARRAY

let arraySet = [...conjunto];

console.log(arraySet, arraySet.length);

// Another way to add elements to a SET OBJECT

let flowers = new Set(["Margarita","Rose", "Tulipan", "Wasp Flower"]);
console.log("Size: " + flowers.size);
console.log(flowers);

console.log('*************************************************************************');

// .has(element) => We can know if an element exists with this functions, like has in 
// JQUERY FOR CLASSES

let number7 = conjunto.has(7);
console.log('Number 7: ' + (number7?"Yes":"No"));

flowers.delete("Rose");
console.log(flowers, flowers.size);

console.log('*************************************************************************');

// .forEach() :Recorrer sets

flowers.forEach(flower => console.log(flower));