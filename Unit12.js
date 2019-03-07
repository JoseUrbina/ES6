// ** Practice Section 12 **

let nameMethod = "getData";

class automovil
{
	constructor(color, model, age)
	{
		this.color = color;
		this.model = model;
		this.age = age;
	}

	[nameMethod]()
	{
		return {
			color: this.color,
			model: this.model,
			age: this.age
		};
	}

	static showMessage()
	{
		return `Class automovil`;
	}
}

class carro extends automovil
{
	constructor(color, model, age, price)
	{
		super(color, model, age);
		this.price = price;
	}

	getMP()
	{
		return `Model: ${this.model} - Price: ${this.price}`;
	}

	incrementIVA()
	{
		// using static variables
		carro.iva += 1;
		return;
	}

	getIva()
	{
		return carro.iva;
	}

	// method computado
	[nameMethod]()
	{
		return {
			color: this.color,
			model: this.model,
			age: this.age,
			price: this.price,
			["I.V.A"]: carro.iva
		};
	}
}

// A way to create a static variable
carro.iva = 0;

let hyundai = new carro("red", "Zedan", "2018", "18000");

console.log(hyundai); 
