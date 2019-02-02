// Video 55: Inicializadores de los mapas

let persona = new Map([["name", "Joseph"],["age", 25],["active", true]]);

console.log(persona);
console.log(persona.size);

for(let prop of persona)
{
	console.log(prop);
}