function createPerson(name, age, active)
{
	return {
		name, 
		age,
		active,
		showName(){
			console.log(this.name);
		}
	};
};

let student1 = createPerson("Luis", 24, true);
student1.showName();
let student2 = createPerson("María",50, true);
let student3 = createPerson("Pedroc", 24, true);
let student4 = createPerson("Luis", 24, true);

function getStudents(...students)
{
	return [...students];
}

console.log(getStudents(student1, student2, student3));

// Video: 29: Metodos simples

function saveData(validate)
{
	let message  = (validate)?"Save successefully":"Not save";

	return message;
}

function createAnimal(name, place, age){
	return {
		name, 
		place,
		age,
		showData(){
			return `${this.name} lives in ${place} and to be ${age} years old`;
		},
		saveData
	}
}



let lion = createAnimal("Lion", "Africa", 15);
console.log(lion.showData());
console.log(lion.saveData(true));

// VIdeo 30: Propiedades conmutadas

let alias = "Product ";
let nameProperty = "Active";

function furniture(product, prize, active)
{
	return {
		[alias + "Name"]: product,
		[alias + "Prize"]: prize,
		[nameProperty]: active,
		showProductName(){
			console.info(`*** ${this[alias + "Name"]} ***`);
		}
	}
}

var chair = furniture("Chair", 150.50, true);
chair.showProductName();

// VIdeo 31: Object.is