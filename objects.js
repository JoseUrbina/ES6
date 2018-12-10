function createPerson(name, age, active)
{
	return {
		name, 
		age,
		active
	};
};

let student1 = createPerson("Luis", 24, true);
let student2 = createPerson("María",50, true);
let student3 = createPerson("Pedroc", 24, true);

function getStudents(...students)
{
	return [...students];
}

console.log(getStudents(student1, student2, student3));

// Video: 29: Metodos simples

function createAnimal(name, place, age){
	return {
		name, 
		place,
		age,
		showData(){
			return `${this.name} lives in ${place} and to be ${age} years old`;
		}
	}
}

let lion = createAnimal("Lion", "Africa", 15);
console.log(lion.showData());
