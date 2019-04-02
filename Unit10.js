// Unit 10: MAP

let mapa = new Map([["name", "José"], ["gender", "man"]]);

mapa.set("age", 15);
mapa.set("lastname");
mapa.set(undefined, "vacío");

console.log(mapa.size);
console.log(mapa);

mapa.delete(undefined);

console.log(mapa.size);
console.log(mapa);

console.log(`Name: ${mapa.has("name")}`);

console.log("Gender: " + mapa.get("gender"));

mapa.forEach((value, key) => console.log(key, value));

console.log('*************************************************');

for(let element of mapa)
{
    console.log(element[0], element[1]);
}