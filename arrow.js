// VIdeo 26: FUnciones flechas y arreglos

var arreglo1 = [1,2,5,3,9,10,100,23];

// - Order an array in an ascending way

let ordArray1 = arreglo1.sort(function(a, b) {
	return a - b;
});

let ordArrowArray = arreglo1.sort((a,b) => a-b);

console.log([ordArray1, ordArrowArray]);

// Video 25: There's no change in the 'THIS' object

let manage = {
	id: '152',
	init: function(){
		/* document.addEventListener('click', function(event){
			this.clickEnPagina(event.type);
		}.bind(this),false); */

		document.addEventListener('click', event => this.clickEnPagina(event.type));
	},
	clickEnPagina: function(type)
	{
		console.log(`Manejando ${type} para el id: ${this.id}`);
	}
};

manage.init();


let persona = {
	name: 'Parley',
	message: function(name){

		/* let showMessage =  function(){
			return `Hello, ${this.name}`;
		}.bind(this);*/

		let showMessage = () => `Hello, ${name}`;
		
		return showMessage();
	}
}

console.log(persona.message('Luisa'));


// ** Video 27: Identificando funciones flechas y otros ejemplos

console.info("***************************************************");

let resta = (a,b) => a-b;
console.log(`Type of arrow function: ${typeof resta}`);
console.log(resta instanceof Function);
console.log(resta(10,9));

// We cannot create a constructor from a arrow function
 // let newResta = new resta(10, 4);

// NO pasa nada
(() => {});

// We cannot use the arguments object because in arror function doesn't exist
(name => {
	// console.log(arguments);
})();


function Suma(a,b)
{
	(operacion => {
		console.log(`${operacion} : ${[...arguments]}`);
	})("Suma");
}

Suma(10, 8);

function showName(name)
{
	(() => console.log(arguments[0]))(name);
}

showName("Kastro");

