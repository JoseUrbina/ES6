// Video 13 y 14: parametros por defecto

// when the first parameter is optional, we need to do another funciton for invoking
// the original function
function saludar1(time)
{
	saludar("Pedrox", time);
}

/* function saludar(user = 'José Antonio', time = 1000)
{
	setTimeout(() => console.log(user), time);
} */

function saludar(valor ,user = 'José Antonio', time = 3000)
{
	console.log(arguments);
	// setTimeout(() => console.log(user), time);
}

saludar("Easy-going", "Anthony");
//saludar("Anthony", 3000);
// saludar1(5000);


function execute(message, fn)
{
	if(typeof(fn) === "undefined")
	{
		console.error("fn is not a function");
		return;
	}

	fnMessage(message);
}

function fnMessage(message)
{
	console.log(message);
}

execute("Welcome to the Jungle", fnMessage);

console.log(typeof(fnMessage) === "function");