// Video 59: Introduccion a las clases

function Persona(name)
{
	//if(typeof new.target != "undefined")
	//{
		this.name = name;

		this.scream = () => {
			console.log("Helloooo, My name is " + this.name)
		};
	//}
}

Persona.prototype.sayMyName = function(){
	console.log(this.name);
};

let jose = new Persona("Joseph Anthony");

jose.scream();
jose.sayMyName();

function Estudiante(name, active = true)
{
	//if(typeof new.target !== "undefined")
	//{
	   Persona.call(this, name);
	   this.active = active;

		
	//}
}

Estudiante.prototype = new Persona();
Estudiante.prototype.constructor = Estudiante;

let student1 = new Estudiante("Peter", true);

console.log(student1);