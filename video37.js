// Video 37: Destructuracion de objetos anidados

let objeto = {
	file: "app.js",
	cursor: {
		line: 12,
		column: 5
	},
	lastFile:{
		file:"index.html",
		cursor:{
			line:16,
			column: 12
		}
	},
	otherNodo:{
		subNodo:{
			file:"promise.js",
			cursor:{
				line: 25,
				column: 2
			}
		}
	}
};

let {file: fFile,cursor: firstFile} = objeto;
let {lastFile: {file:sFile ,cursor:lastFile}} = objeto;
let {otherNodo: {subNodo: { file:tFile, cursor: otherFile }}} = objeto;

let anotherWay = objeto.otherNodo.subNodo.cursor;

console.log([[fFile, firstFile], [sFile, lastFile], [tFile, otherFile]]);
console.log(anotherWay);
