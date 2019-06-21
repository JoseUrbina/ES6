<?php
	header("Content-type:Application/json");

	$id = $_GET["id"];
	$name = $_GET["name"];

	$dateRecord = date('Y-m-d');
	$active = true;


	$response = array(
		"id" => $id,
		"name" => $name,
		"dateRecord" => $dateRecord,
		"active" => $active 
	);

	echo json_encode($response, JSON_OBJECT_AS_ARRAY);




