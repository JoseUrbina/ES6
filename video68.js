// *** VIdeo 68: Promesas ES6 ***

// return a promise : Inside the promise we can point the setTimeout() function
function tareaAsincrona()
{
	let promesa =  new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Tarea asincrona executed');
			// resolve("All OK");
			reject("All BAD")
		}, 1300);
	});

	return promesa;
}

tareaAsincrona()
.then(resolve => console.log(resolve))
.catch(reject => console.error(reject));

console.log('Testing');