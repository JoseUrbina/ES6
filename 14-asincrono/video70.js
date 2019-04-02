/*** Video 70: Callbacks ***/

function getUserById(id, callback)
{
	const user = {
		id,
		name: "Joseph"
	};

	if(id === 20)
	{
		callback(`Use id ${id} does not exist`);
	}else {
		callback(null, user);
	}
}

getUserById(20, (error, response) => {
	if(error)
	{
		throw error;
	}
	else
	{
		return console.log("User: ", response);
	}
});