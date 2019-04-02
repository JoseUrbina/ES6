/* -- Video 36: Destructuracion de objetos -- */

let settings = {
	name: "Leviatan",
	email: "joseantonioug-09@hotmail.com",
	facebook: "levi.99",
	google: "joseantonioug.99@gmail.com",
	premium: true,
	active: true
};

let {name:Nombre, email:Correo, facebook:fb, premium:dePago, active = false} = settings;

console.log(Nombre, Correo, active);