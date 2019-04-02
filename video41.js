// ** Video 41: Destructuracion de parametros **

// We can use destructuracion de objetos for sending a specific values to the function
// it is useful because, all programmers can know which are their properties.
// Morover, we can set up default values into an object in the function (Parameter)

function createPlayer(nickname, 
	{hp: help, sp, clase} = {hp: 100, sp: 50, clase: "Witch"}
)
{
	console.log(nickname, help, sp, clase);
}

let settings = {
	hp: 500,
	sp: 280,
	clase: "Warrior"
};

createPlayer("Kraken", settings);


/********************************************************************************/

let user = {
	name: "Joseph",
	age: 25,
	performance: {
		peso: 52,
		alto: 160,
		look:{
			eyes: "brown",
			hair: "black",
			nose: "medium"
		}
	}
};

let {name, performance: {peso, alto, look: {hair: pelo, nose: nariz}}, age, email = "josea@gmai.com"} = user;

let colors = ["black", ["yellow", "green", ["blue"]],"brown", "white"];

console.log(name, peso, alto, pelo, nariz, age, email);

let [negro, [amarillo,, [azul]], ...moreColors] = colors;
console.log(negro, amarillo, azul, moreColors );

function createUser(username, 
	{age, email, facebook:fb, address} = {age: 18, 
									   email: "prueba@gmail.com", 
									   facebook: "prueba.facebok.com",
									   address: "directionDeprueba"}
)
{
	console.log(username, age, email, fb, address)
}


let newUser = {
	age: 25,
	email: "joseantonioug-09@hotmail.com",
	facebook: "leviatan.09",
	address: "Ducuali"
};

createUser("Joseph", newUser);































