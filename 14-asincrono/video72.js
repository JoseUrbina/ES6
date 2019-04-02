// *** Video 72: Promesas en lugar de callbacks ***

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

const getEmpleado = (id) => {

	const empleadoDB = empleados.find(empleado => empleado.id === id);

	let promesa = new Promise((resolve, reject) => {

		if(!empleadoDB)
			reject(`Empleado with id ${id} has not found`);
		else
			resolve(empleadoDB);
	});

	return promesa;
};

let getSalario = (empleado) => {

	let salarioDB = salarios.find(salario => salario.id === empleado.id);

	return new Promise((resolve, reject) => {

		if(!salarioDB)
			reject(`No se encontro un salario para el empleado ${empleado.nombre}`);
		else
		{
			let emp = {
				nombre: empleado.nombre,
				salario: salarioDB.salario,
				id: empleado.id
			};

			resolve(emp);
		}
	});
};

// Using Promise
getEmpleado(2)
.then(getSalario)
.then(response => console.log(response))
.catch(err => console.error(err));