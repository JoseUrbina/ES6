// *** Video 71: Problema con los callbacks ***

"use strict"

/* function getUserById(id, callback)
{
	const User = {
		name: "Joseph",
		id
	};

	if(id === 20)
	{
		callback(`User with id ${id} has not found`);
	}
	else
	{
		callback(null, User);
	}
} */

/*
	Callback(param1, param2,....);

	Note: Always the first parameter is the error, 
	then other parameters that we want to use to

*/

/* getUserById(1, (err, user) => {

	if(err)
		return console.log(err);

	console.log('User:', user);

}); */

const empleados = [{
	id: 1,
	nombre: "Melissa"
},{
	id: 2,
	nombre: "Joseph"
},{
	id: 3,
	nombre: "Luis"
}];

const salarios = [{
	id: 1,
	salario: 1000
},{
	id: 2, 
	salario: 3000
}];

// FUnction that gets X employee by id , then executed a callback
let getEmpleado = (id, callback) => {

	let empleadoDB = empleados.find(empleado => empleado.id === id);

	if(!empleadoDB)
		callback(`Empleado id - ${id} has not found`);
	else
		callback(null, empleadoDB);
};

// Function that gets the salary of X employee by their id,
// then return a new object or a message in case of error
let getSalario = (empleado, callback) => {

	let salarioDB = salarios.find(salario => salario.id === empleado.id);

	if(!salarioDB)
		callback(`No se encontro un salario para el empleado ${empleado.nombre}`);
	else
	{
		callback(null, {
			nombre: empleado.nombre,
			salario: salarioDB.salario,
			id
		});
	}

};

// Uso

getEmpleado(3, (err, empleado) => {

	// In case of error
	if(err)
		return console.error(err);


	// Executed 2 callback function
	getSalario(empleado, (err, datos) => {

		if(err)
			return console.log(err);

		console.log(datos);
	});

	console.log("Empleado: ", empleado);
});
