'use strict'

// Example 2: Calcular la suma de 2 numeros

let calcular = (numero1, numero2) => {
	return new Promise((resolve, reject) => {
		let suma = numero1 + numero2;

		if(suma > 5)
		{
			// you must always use 1: function 2: time
			setTimeout(() => resolve(suma),2000);
		}	
		else
		{
			setTimeout(() => reject("Error en la suma"), 2000);
		}
	});
};


// node : i need to export the function to use in other files

module.exports = {
	calcular
}