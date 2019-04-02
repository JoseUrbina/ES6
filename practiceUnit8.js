// Unit 8 : Simbolos

let name = Symbol('name');

let user = {};

user[name] = "Joseph";

console.log(name);
console.log(user[name]);

//let newName = new Symbol();

let name1 = Symbol('name');

console.log(name == name1);
console.log(name === name1);
console.log(Object.is(name, name1));

let newSymbol = Symbol.for('name');

let newSymbol1 = Symbol.for('name');

console.log(newSymbol == newSymbol1);
console.log(newSymbol === newSymbol1);
console.log(Object.is(newSymbol, newSymbol1));

console.log(Symbol.keyFor(newSymbol));

console.info("*******************************************************");

let idPlayer = Symbol.for('id player');

let player = {
	[idPlayer]: 544,
	name: "Levi",
	hp: 30,
	sp: 100
};

console.log(Object.keys(player));

for(let i in player)
{
	console.log(i, player[i]);
}

let symPlayer = Object.getOwnPropertySymbols(player);

for(let i in symPlayer)
{
	console.log(Symbol.keyFor(symPlayer[i]), " : ", player[symPlayer[i]]);
	console.log(symPlayer[i], Symbol.keyFor(symPlayer[i]));
}

console.log('********************************************************');

console.log("My symbol is : " + String(idPlayer));
