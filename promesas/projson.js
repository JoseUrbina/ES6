'use strict';
		
$(() => {
	$('#btnSend').on('click', (event) => {
		event.preventDefault();


		let promesa = new Promise((resolve, reject) => {

			$.get('projson.php?id=0')
			.done((result, status, jqXHR) => {
				resolve(result);
			})
			.fail((jqXHR, status) => {
				reject(jqXHR.statusText);
			});
		});

		promesa.then(response => $('#message').text(response))
			   .catch(error => alert(error));
	}); 
});