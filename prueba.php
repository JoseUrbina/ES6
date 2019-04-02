<?php 

	$phpSelf = $_SERVER["PHP_SELF"];
	$requestUri = $_SERVER["REQUEST_URI"];

	echo $phpSelf . "<br>";
	echo $requestUri;

?>