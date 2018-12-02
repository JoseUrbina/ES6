// Video 10: Template literals

var name = 'José';
var lastname = 'Guti';

function getName(){
	return name;
}

var completedName1 = `Your completed name is ${name} ${lastname}`;

var multiline = `<h1 class="title">New title</h1>
<p>This is a new paragraph</p>`;

var showName = `Your name is ${getName()} and to have ${getName().length} characters`;

console.log(completedName1);
console.log(multiline);
console.log(showName);

// Video 11: Template con tags

function tag(literals, ...substituciones)
{
	var resultado = "";

	// console.log(arguments);

	for(let i = 0; i <= substituciones.length; i++ )
	{
		resultado += literals[i];

		if(substituciones[i])
			resultado += substituciones[i];
	}

	return resultado;
}

let cantidad = 10,
	precio_unitario = 100;

let message = tag`${cantidad} lapices cuestan ${cantidad * precio_unitario} pesos`;

console.log(message); 

// Video 12: Usando valores raw(crudos)
// 

let texto1 = "hola";
let texto2 = 'hola';
let texto3 = `hola`;

console.log((texto1 === texto3) && (texto2 === texto3));


let mensaje1 = `Hello \nWorld\\`,
	mensaje2 = String.raw`Hello World\\`,
	mensaje3 = `${cantidad} \\lapices \ncuestan ${cantidad * precio_unitario} pesos`;

console.log([mensaje1, mensaje2, mensaje3]);

// **********************************************************************************

function tags(literals, ...valores)
{
	var response = [];

	// Verify if exist any string between the values
	if(valores.some(v => typeof(v) === "string"))
	{
		// filter string values from valores variable
		let chainString = valores.filter(v => typeof(v) === "string");

		// Create new raw string 
		let chains = chainString.map(ch => {
			return String.raw`\n${ch}\n`;
		});

		// Push in the response array
		response.push([literals, chains]);
	}
	else
		response.push("It hasn't found a string");

	return response;
}

var firstChain = "Welcome";
var number = 10;

var result = tags`${firstChain} to my free space ${number}`;

console.log(result);
console.log([firstChain.startsWith("w"),
		    firstChain.endsWith("e"),
		    firstChain.includes("z")]);

console.log([
			(firstChain.substr(0,1) === "w"),
			(firstChain.substr(-1) === "e"),
			(firstChain.indexOf("z") >=0 ? true : false)
	]);
