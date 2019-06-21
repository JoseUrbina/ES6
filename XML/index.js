"use strict"

const fetch = require('node-fetch');

/*

We did not use async, just a normal promise exercise

function getNombre(username)
{
	const url = `https://api.github.com/users/${username}`;

	fetch(url)
	.then(respuesta => respuesta.json())
	.then(json => console.log(json.name))
	.catch(e => console.log(e));
}

*/

async function getNombre(username)
{
	const url = `https://api.github.com/users/${username}`;

	const response = await fetch(url);
	const json = await response.json();

	// validate if this throw an error, in finding username
	if(response.status !== 200)
		throw new Error('Ha ocurrido un error');

	// return a promise as all async function
	return json.name;
	//console.log(json.name);
}

/* getNombre("No_existo")
.then(response => console.log(response))
.catch(e => console.log(e)); */

// with this, we deleted the use of promise at all, we just use values and errors
(async () => {
	try
	{
		let name = await getNombre('JoseUrbina');

		console.log(name);
	}
	catch(e)
	{
		console.log(e);
	}
})();