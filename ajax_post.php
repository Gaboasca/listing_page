<?php
	require_once("itemsdb.php");
	$data = json_decode(file_get_contents("php://input")); 
	$titles = mysql_real_escape_string($data->titles);
	$prices = mysql_real_escape_string($data->prices);
	$total = mysql_real_escape_string($data->total);

	$sql = "INSERT INTO cart VALUES('NULL','".$titles."','".$prices."','".$prices."')";
	$connect->exec($sql);

?>