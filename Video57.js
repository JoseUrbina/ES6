// *** VIdeo 57: NUevo ciclo : for..of ***

let fruits = ["apple", "pear", "banana", "watermelon", "melon"];

/*for(let i=0;i<fruits.length; i++){
	console.log(fruits[i]);
}

for(let i in fruits){
	console.log(fruits[i]);
} 

fruits.forEach(element => console.log(element));*/

for(let fruit of fruits){
	console.log(fruit);
}

let people = [
	{name: "Joseph", age: 25},
	{name: "Fernando", age: 85},
	{name: "Mary", age: 14},
	{name: "Katy", age: 45}
];

for(let person of people){
	console.log(person.name, person.age);
}

console.log("**********************************************************");

let setPeople = new Set([
	{name: "Joseph", age: 25},
	{name: "Fernando", age: 85},
	{name: "Mary", age: 14},
	{name: "Katy", age: 45}
]);

setPeople.add({name: "Ferry", age: 14});

for(let person of setPeople){
	console.log(person.name, person.age);
}

console.log("***********************************************************");

let mapa = new Map([["name", "María"], ["gender", "female"]]);

mapa.set("age", 24);
mapa.set("active", true);

for(let element of mapa){
	console.log(element[0], element[1]);
}