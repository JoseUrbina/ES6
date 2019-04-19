// Ejemplo practice async - await

/* Example 1 */

async function positive_number(number){
	return new Promise((resolve, reject) => {
		if(number > 0)
		{
			setTimeout(() => resolve(`Number ${number} is positive`),3000);
		}
		else
		{
			setTimeout(() => reject(`Number ${number} is negative`), 3000);
		}
	});
}

// First way
positive_number(-3)
.then(response => console.log(response))
.catch(error => console.log(error));

async function getMessageNumber(number)
{
	let message = await positive_number(number);

	return message;
}

getMessageNumber(-10)
.then(response => console.log(response))
.catch(error => console.log(error));

/* Example #2 */

// Add 100 to a car price if is more than 0, else return a error message
const priceCar = async (price) => {
	return new Promise((resolve, reject) => {
		if(price > 0)
		{
			setTimeout(() => resolve(price + 100), 3000);
		}
		else
		{
			reject(`Price is equal or less than 0`);
		}
	});
};

const descount = async (price) => {
	let amount = await priceCar(price);

	if(amount >= 100 && amount <= 300)
		amount -= 25;
	else if(amount > 300 && amount <=500)
		amount -= 50;
	else if(amount > 500)
		amount -= 100;

	return amount;
}

descount(600)
.then(response => console.log(response))
.catch(error => console.log(error));

/* priceCar(0)
.then(response => console.log(response))
.catch(error => console.log(error)); */