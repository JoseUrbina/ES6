let animal = {
	walk() {
		return "I'm walking";
	},
	drink(){
		return "I'm drinking water";
	}
};

let carnivorous = {
	walk(){
		return `${super.walk()}, alone!`;
	},
	sing(){
		return "I'm singing";
	},
	action(){
		return super.drink();
	}
};


Object.setPrototypeOf(carnivorous, animal);

// Test inherit, and use SUPER operator
console.log(carnivorous.walk());
console.log(carnivorous.action());

console.info("**************************************************************");

let person = {
	name: "Luis",
	email: "luis.99@gmail.com",
	characteristics: {
		height: 80.5,
		weight: 180,
		appereance:{
			hair: "black",
			nose: "Medium"
		}
	},
	alive: true
};

// get some values, change names and applying default values
let {name, email, alive:Vive, fb = "luis-9012.fb.chart"} = person;

// Getting intern objects, use default variable knowing wheter it exists or not
let {characteristics: {height, appereance: {hair, colorEye: ColorEyes = "black"}}} = person;

console.log(name, email, Vive, fb);
console.log(height, hair, ColorEyes);

console.info("****************************************************************");

let animals = ["cow", ["cocodrile", "Lion", "Eagle", ["Elephan", "Monkey", "goat"]], "Jiraffa"];

let [vaca,,jirafa] = animals;

var leon = "Leon";
// Avoid values, select intern arrays, use rest operator
var [,[cocodrilo, leon,,[elefante, ...twoAnimals]], ...restAnimals] = animals;

console.log(vaca, jirafa);
console.log(cocodrilo, leon, elefante, twoAnimals, restAnimals);

// Valores por defecto
let fruit = ["Apple"];
let [fruta1, fruta2 = "Pear"] = fruit;
console.log(fruta1, fruta2);

console.info("****************************************************************");

let settings = {
	skin: "Warrior",
	hp: 505,
	active: false
};

function createUser(nickname, 
	{skin, hp, active} = {skin: "Mage", hp: 100, active: false}
)
{
	console.log(nickname, skin, hp, active);
}

createUser("Leviatan", settings);



