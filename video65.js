/** Video 65: Herencia de las clases **/

class Rectangulo
{
	constructor(alto, ancho)
	{
		this.alto = alto;
		this.ancho = ancho;
	}

	getArea()
	{
		return this.alto * this.ancho;
	}
}

// extends: parent class transfers its properties and methos to children
class Cuadrado extends Rectangulo{
	constructor(lado)
	{
		// we just need to execute the parent constructor: super()
		super(lado, lado);
	}
}

let rectangulo = new Rectangulo(3,5);

console.log(`Area del rectangulo: ${rectangulo.getArea()}`);

let cuadrado = new Cuadrado(4);

console.log(`Area del cuadrado: ${cuadrado.getArea()}`);

console.log(cuadrado instanceof Cuadrado);
console.log(cuadrado instanceof Rectangulo);