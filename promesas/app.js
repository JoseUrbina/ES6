'use strict'

// obligatory ./
let prom = require('./promesa.js');

// prom.calcular(5,4).then(result => console.log(result), error => console.log(error));

prom.calcular(1,2).then(result => console.log(result)).catch(error => console.log(error));

// Example 1: Normal promise

/* let promesa = new Promise((resolve, reject) => {
	resolve('Success');
	//reject("Error");
});*/

// promesa.then(result => console.log(result), error => console.log(error));

//promesa.then(result => console.log(result)).catch(error => console.log(error));