<?php
	header('Content-type:Application/json');

	$name = $_GET["name"];
	$age = $_GET["age"];

	$people = array(array("id" => 1, "name" => "Pedro", "age" => 78),
					array("id" => 2, "name" => "Karla", "age" => 45),
					array("id" => 3, "name" => "ContraNatura", "age" => 25),
					array("id" => 4, "name" => "Diego", "age" => 82));

	// Auto-generate id
	$people[] = array(
		"id" => count($people) + 1,
		"name" => $name,
		"age" => $age
	);

	echo json_encode($people, JSON_OBJECT_AS_ARRAY);