// Video 52: Mapas y sus metodos

let mapa = new Map();

mapa.set("name", "Joseph");
mapa.set("age", 25);
mapa.set("lastname"); // return undefined value

console.log(mapa);
console.log(mapa.size);

mapa.delete("lastname");

console.log(mapa.get("name"));

mapa.set("age", 45);

// mapa.clear();

 console.log(mapa);
// console.log(mapa.size);
