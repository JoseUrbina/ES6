var saludo = "Hola Mundo!";

// substr(start, lenght)
console.log( saludo.substr(0,1) == "H" );

// search a character into the string : return the position else finds 
// the string or character return -1
console.log( saludo.indexOf("x") );

// 2do parameter: the string starts with 1 not with 0 like normally is it

// Verify if a string start with the parameter, return true if it is found else false
// 1er parameter: searched value,  2do parameter: From position should start to find
console.log(saludo.startsWith("H"));

// Verify if a string ends up with the parameter, return true if it is found else false
// 1er parameter: searched value,  2do parameter: From position should start to find
console.log(saludo.endsWith("!"));

// Verify if a string paramter is found in the string, return true if it is found else false
// 1er parameter: searched value,  2do parameter: From position should start to find
console.log(saludo.includes("x"));

console.log(saludo.substr( saludo.indexOf("M")));



// Example: Array personas -> get with lastname starts with U

var personas = [
	{
		name: "José",
		lastname: "Urbina",
		edad: 25
	},
	{
		name: "Mario",
		lastname: "Urtado",
		edad: 90
	},
	{
		name: "Fernanda",
		lastname: "Morales",
		edad: 17
	}

];


var filters = personas.filter(p => p.lastname.startsWith("M"));
console.log(filters);

// Example: Having a string, then determinate if a letter finds in, 
// so, extract the string to the end with the substr function

let message = "Hello User, Welcome to this place";

var position = message.lastIndexOf("z");

if(position >= 0)
{
	let newMessage = message.substr(position);
	console.dir(newMessage);
}

/* Video 9: Repeat  */

var word = "hello";
console.log(word.repeat(2));

const ESPACIOS = 12;
var names = ["María", "Fernando", "Antonio"];
var phones = ["87451245","78985621","85451263"];

for(i in names){
	let dif = ESPACIOS - names[i].length;
	console.log(`${names[i]}${" ".repeat(dif)}|${phones[i]}`);
}

// Example: BIll
 
const ZERO = 7;

var factura = 1000000;
var dif = ZERO - factura.toString().length;

console.log(`${"0".repeat(dif)}${factura}`);

// Practices includes
// 
var furniture = ["table", "mirror", "tv", "radio", "cushion", "curtain", "sofa", "armchair"];

// Verify if an element is into a string
console.log(furniture.filter(e => e.indexOf("u") >= 0));
console.log(furniture.filter(e => e.includes("u")));


// Verify is a string starts with the string parameter
console.log(furniture.filter(e => e.substr(0,1) === "a"));
console.log(furniture.filter(e => e.startsWith("a")));

// Verify is an string finishes with the string parameter
console.log(furniture.filter(e => e.substr(-1) === "r"));
console.log(furniture.filter(e => e.endsWith("r")));

// Obtain the first element found with the condition
console.log(furniture.find(e => e === "sofa"));

// if the searched element is in the array
if(furniture.some(e => e === "glass"))
	console.log("Element has been found");
else
	console.log('Element has not been found');

// Get a number which will use to repeat a string n times with the repeat function
let numRepeat = parseInt(prompt("Amout of repetition:", ""));

if(!isNaN(numRepeat))
	console.log('0'.repeat(parseInt(numRepeat)));


