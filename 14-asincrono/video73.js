/* Video 73: async - await javascript */

"use strict";

// A normal function that return something
/* **let getNombre = () => "José Antonio"; ** */


/*
	Async: Allowing us to get a promise as result instead of a string

	(Return Promise : resolve());

	** NOTE:
	
	async always return a promise, but we can manually return the promise by itself

	await ==> it uses into a async function , en return the value of the promise (resolve)
			  directly without use .then();
*/

const getNombre = async () => {

	/*
		THis does not work, it must be a raw result or a promise

		setTimeout(() => {
			return "José Antonio";
		}, 3000);
	*/

	return new Promise((resolve, reject) => 
	{
		setTimeout(() => resolve("José Antonio"), 3000);
	});
}; 

getNombre().then(response => console.log(response), error => console.log(error));

const Saludar = async () => {

	let name = await getNombre();

	return `Hello ${name}`;
};

Saludar()
.then(response => console.log(response))
.catch(error => console.log(error));