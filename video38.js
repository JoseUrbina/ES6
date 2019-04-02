// Video 38: Destructuracion de arreglos

let frutas = ["manzana", "banano", "uva"];

// Drestructuras el arreglo frutas, se obtienen siempre en orden 
// como se encuentran en el arreglo
let [fruta1, fruta2] = frutas;

console.log([fruta1, fruta2]);

// Para obtener el valor de la tercera posicion 
// se utiliza ( , ) para evitar obtener los valores anteriores a el 
let [,,fruta3] = frutas;

console.log(fruta3);

// Si tenemos una variable previamente esta cambia su valor en la destructuracion
let otherFruit = "Pear";

[otherFruit] = frutas;
console.log(otherFruit);

// Intercambio de valores ** Important

let a = 2, b = 4;

[a, b] = [b, a];

console.log([a, b]);
