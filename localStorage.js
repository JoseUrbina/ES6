// LocalStorage

// Validando si esta o no disponible el localstorage

if(typeof(Storage) !== "undefined")
	console.log('Available localStorage');
else
	console.info('Unavailable localStorage');

// save values localStorage

console.log(localStorage);

localStorage.setItem("user_name", "Joseph");
localStorage.setItem("user_email", "levi.99@gmail.es");
localStorage.setItem("user_id", 1);

// get an item from localStorage

console.log(`Name: ${localStorage.getItem("user_name")}`);
console.log("Email: " + localStorage.getItem("user_email"));

// Remove an element in localStorage

localStorage.removeItem("user_email");

// Storage a object into localStorage

// NOTE: WE NEED TO BECOME IT TO A STRING : JSON.STRINGIFY()

let user1 = {
	"id": 1,
	["Nick_Name"] : "Leviatan",
	"age" : 25
};

localStorage.setItem("user1", JSON.stringify(user1));

// Get a json from localStorage

// NOTE: As the object is a json string we need to use JSON.parse() for using the datas

let user_1 = JSON.parse(localStorage.getItem("user1"));

console.log(`${user_1["Nick_Name"]} - ${user_1.id} - ${user_1.age}`);

/* delete all elements in localstorage */

document.getElementById("datos").innerHTML = "<h3>" + localStorage.getItem("user_name") + "</h3>";

localStorage.clear();




