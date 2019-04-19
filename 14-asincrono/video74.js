/**** Video 74: Ejercicio Async Await ****/

"use strict"

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

const getEmpleado = async (id) => {

	const empleadoDB = empleados.find(empleado => empleado.id === id);

	if(!empleadoDB)
		throw new Error(`Empleado with id ${id} has not found`);
	else
		return empleadoDB;
};

let getSalario = async (empleado) => {

	let salarioDB = salarios.find(salario => salario.id === empleado.id);

	// Promise reject(response) : we return it with a throw new Error() -JS
	if(!salarioDB)
		throw new Error(`No se encontro un salario para el empleado ${empleado.nombre}`);
	else
	{
		return {
					nombre: empleado.nombre,
					salario: salarioDB.salario,
					id: empleado.id
				};
	}
};

/*
	To use await in this case we need to create a new ASYNC Function
	this way is more tidy
*/
const getInformation = async (id) => {

	let empleado = await getEmpleado(id);

	let resp = await getSalario(empleado);

	return `El empleado ${empleado.nombre} tiene un salario de ${resp.salario}`;
}

getInformation(3)
.then(console.log)
.catch(console.log);
