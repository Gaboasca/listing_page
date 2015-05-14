<?php

	try
	{
		$connect = new PDO("mysql:host=localhost;dbname=listing_page",'root','root');
	}
	catch(Exception $e)
	{
		die("Error".$e->getMessage());
	}

?>