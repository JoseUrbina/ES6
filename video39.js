// Video 39: Destructuracion de arreglos anidados

let colors = ["red", ["green", "yellow", ["pink", "blue"]], "gray", "black"];

var rojo = "";
var azul = "azul"

var [rojo, [verde,,[rosado, azul]], ...otrosColores] = colors;

console.log(rojo, verde, rosado, azul);
console.log(otrosColores);

// -----------------------------------------------------------------------------

let fruits = ["apple", "pear", "watermelon"];

// ...otherFruits :: In this case, to return a empty array
let [apple, pear, watermelon, ...otherFruits ] = fruits;

console.log(apple, otherFruits);