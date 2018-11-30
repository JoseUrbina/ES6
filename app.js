/* var addTo = function(num1){
	let suma = function(num2){
		return num1 + num2;
	}

	return suma;
}

var suma = addTo(5);
console.dir(suma(5));

var numbers = [1, 2, 5, 3, 7, 8, 10];

if(numbers.some(n => n == 77))
{
	console.log('Element has been found');
}
else
{
	console.log('Element hasn\'t been found');
}

var numeros = [];

for(var i = 0; i < 10; i++)
{
	//numeros.push(() => console.log(i));
	//
	numeros.push((function(valor){
		return () => console.log(valor);
	})(i));
}

console.log(numeros);
numeros[7]();

var mensaje = (function(valor){
	return valor;
})("Hello world");

console.log(mensaje); */

var bool = true;
let mensaje = "Hello World!!";

if(true)
{
	let bool = false;

	// Showing the value priority : mensaje
	let mensaje = "New World!";

	if(!bool)
	{
		mensaje = "The value has changed";
	}
	//let mensaje = false;
	console.log(bool);
}

console.dir([bool, mensaje]);

/* Practicing array with its functions : Add to ul list */

/**** var arreglo = [];

for(let i = 0; i < 10; i++)
{
	this.arreglo.push(i);
}

let template = '';

arreglo.forEach(value => {
	template += `<li>Index ${value}: ${value+1}</li>`;
});

document.getElementById('lista').insertAdjacentHTML('afterbegin', template); ****/

// ------ Practice about promise ------

/* let promesa = new Promise((resolve, reject) => {
	const booleano = false;

	if(booleano)
	{
		setTimeout(() => resolve('It\'s OK'), 3000);
	}
	else
	{
		setTimeout(() => reject('it has happened an error'), 3000);
	}
});

promesa.then(response => console.log(response))
.catch(error => console.log(error)); */

// **** Video 5: Constantes

const IMPUESTO_SV = 15.50;

const PERSONA = {
	name: 'Joseph',
	lastname: 'Gutiérrez'
};

// Add new field and value to the PERSONA object
PERSONA.age = 25;

const FRUITS = ['Apple', 'Pear', 'Watermelon'];
FRUITS.push('Banana');

FRUITS.shift();
FRUITS.pop();

//FRUITS = ['Chair', 'Flower'];

if(true)
{
	const IMPUESTO_SV = 30;
	console.log(IMPUESTO_SV);
}

console.log(IMPUESTO_SV);

const NUMBERS = [];

for(let i = 0; i < 10; i++)
{
	NUMBERS.push(i);
}

console.log(NUMBERS.join(","));

console.log('Message'.repeat(4));

// Video 6: Declaracion de funciones dentro de ciclos

var funciones = [];

for(var i = 0; i<10; i++)
{
	funciones.push((function(value){
		return () => console.log(value);
	})(i));
}

funciones[0]();

function add(){
	let value = true;

	var addTo = function(change){
		if(!change)
		{
			value = false;
		}

		return value;
	}

	return addTo;
}

var addiction = add();
console.dir(addiction);
//console.log(addiction(false));
//
var funcion = [];

for(let j = 0; j < 10; j++){
	funcion.push(() => console.log(j));
}

funcion.forEach(f => f());