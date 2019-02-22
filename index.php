<?php
	require "Render.php";


	$render = new Render();

	echo $render->words(["this", "world","is","beautiful"])
				->builtPhrase("-")
				->get(); 

?>