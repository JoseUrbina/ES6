// *** Video 67: Problematica ***

function tareaAsincrona()
{
	setTimeout(function(){
		console.log('Tarea asincrona executed');
		resolve();
	},1300);
}

function resolve()
{
	console.log('All OK!');
}

function reject()
{
	console.log('All bad');
}

tareaAsincrona();

console.log('Testing');