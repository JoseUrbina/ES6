var addTo = function(num1){
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

console.log(mensaje);