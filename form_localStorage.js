let formAdd = document.getElementById('formAdd');

fetchMovies();

formAdd.addEventListener("submit", event => {
	event.preventDefault();

	let nameMovie = document.querySelector("#nameMovie").value;

	if(nameMovie.length > 0)
	{
		localStorage.setItem(nameMovie, nameMovie);

		fetchMovies();
	}
});

function fetchMovies()
{
	let listMovies = document.querySelector("#listMovies");

	listMovies.innerHTML = "";

	for(key in localStorage)
	{
		if(typeof(localStorage[key]) === "string")
		{
			let li = document.createElement("li");
			li.append(localStorage.getItem(key));

			listMovies.append(li);
		}
	} 
}

let formRemove = document.getElementById('formRemove');

formRemove.addEventListener("submit", event => {
	event.preventDefault();

	let key = document.querySelector("#nameRemove").value;

	if(key.length > 0)
	{
		localStorage.removeItem(key);

		fetchMovies();
	}
});