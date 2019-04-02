// Video 56: forEach() de los mapas

let mapa = new Map([["name", "María"], ["active", true]]);

mapa.set("hair", "black");
mapa.set("weight", "198kg");

mapa.forEach((value, key, mapOriginal) => {
	console.log(key, value, mapOriginal);
});

let persona = new Map();
persona.set("name", "Pedrox");
persona.set("nickname", "Pexrox");

persona.forEach((value, key) => console.log(key, value));