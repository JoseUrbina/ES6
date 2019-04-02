// Video 66: Sobreescribiendo las propiedades del padre

class Rectangulo
{
	constructor(alto, ancho)
	{
		this.alto = alto;
		this.ancho = ancho;
	}

	getArea()
	{
		return "Rectangulo: " + (this.alto * this.ancho);
	}

	static showMessage()
	{
		return "HOLA";
	}
}

// extends: parent class transfers its properties and methos to children
class Cuadrado extends Rectangulo{
	constructor(lado)
	{
		// we just need to execute the parent constructor: super()
		super(lado, lado);
	}

	getArea()
	{
		//return super.getArea();
		//return "Cuadrado: " + (this.alto * this.alto);
		//
		return Rectangulo.showMessage();
	}
}

let cuadrado = new Cuadrado(5);

console.log(cuadrado.getArea());