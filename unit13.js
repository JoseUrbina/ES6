// *** Practice Unit 13 ***

function message(type = true)
{
	let promesa = new Promise((resolve , reject) => {
		if(type)
		{
			setTimeout(() => resolve('Type Message: ' + String(type)),1500);
		}
		else
		{
			setTimeout(() => reject("Type Message: " + String(type)), 1500);
		}
	});

	return promesa;
}

message(false)
.then(resolve => console.log(resolve))
.catch(reject => console.error(reject));