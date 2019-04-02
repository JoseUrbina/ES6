let gato = {
	name: 'Rosy',
	sonido(){
		console.log('miau!');
	},
	chillido(){
		console.log('MIAU!');		
	}
};

let perro = {
	sonido(){
		console.log('guau');
	},
	get name()
	{
		return 'Barry';
	}
};

let vacio = {
	name: 'vacio',
	show(){
		console.log(this.name);
	}
};

let angora = Object.create(gato);

console.log(Object.getPrototypeOf(angora) === gato);
console.log(`Angoras's name is ${angora.name}`);
angora.sonido();
angora.chillido();


//Object.assign(vacio, perro);
/* vacio = {
	...perro,
	...vacio
};

console.log(vacio); */

// Charnge the angora's Object to perro's Object
// 1er parameter: Object receptor
// 2do parameter: Object which has the new prototype to copy
Object.setPrototypeOf( angora, perro );

console.log( Object.getPrototypeOf(angora) );
// Its prototype is gato?
console.log( Object.getPrototypeOf(angora) === gato );
console.log( Object.getPrototypeOf(angora) === perro );

console.log(`Angora's name is ${angora.name}`);
angora.sonido();

// This function doesn't exist in perro Object
angora.chillido();

