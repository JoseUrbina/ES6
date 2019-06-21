<?php

	// Return a simple string to show into a element
	
	$name = htmlentities(addslashes($_GET["name"]));

	echo "My name is {$name}";
