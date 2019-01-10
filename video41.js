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