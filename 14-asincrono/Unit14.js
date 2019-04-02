// *** Practice callbacks and promise ***

"use strict"

const Director = [{
	id: 1,
	name: "Rogers"
},{
	id:2,
	name: "Christopher"
},{
	id: 3,
	name: "Lorena"
}];

const Movies = [
{
	id: 1,
	idDirector: 1,
	title: "Hulk"
},
{
	id: 2,
	idDirector: 1,
	title: "300"
},
{
	id: 3,
	idDirector: 3,
	title: "Rocky"
}
];

/** Using callbacks **/

/* let getDirector = (id, callback) => {

	let director = Director.find(dir => dir.id === id);

	if(!director)
		callback(`Director with id ${id} has not found`);
	else
		callback(null, director);
};	

let getMovies = (director, callback) => {

	let movies = Movies.filter(movie => movie.idDirector === director.id)
					   .map(movie => movie.title);

	if(!movies || movies.length === 0)
		callback(`El director ${director.name} no ha realizado peliculas`);
	else
		callback(null, {
			id: director.id,
			Director: director.name,
			Movies: movies
		});
};

getDirector(2, (err, director) => {

	if(err)
		return console.log(err);

	getMovies(director, (err, data) => {
		if(err)
			return console.log(err);

		console.log(data);
	});

	//console.log(director);
});
*/

// Using promise

let getDirector = (id) => {

	return new Promise((resolve, reject) => {
		let director = Director.find(dir => dir.id === id);

	if(!director)
		reject(`Director with id ${id} has not found`);
	else
		resolve(director);
	});
};

let getMovies = (director) => {

	return new Promise((resolve, reject) => {

		let movies = Movies.filter(movie => movie.idDirector === director.id)
						   .map(movie => movie.title);

		if(!movies || movies.length === 0)
			reject(`El director ${director.name} no ha realizado peliculas`);
		else
			resolve({
				id: director.id,
				Director: director.name,
				Movies: movies
			});			   
	});	
};

getDirector(3)
.then(getMovies)
.then(data => console.log(data))
.catch(err => console.log(err));


